from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
app = Flask(__name__)
from pymongo import MongoClient 
from bson.json_util import dumps, loads 
import os

client = MongoClient('mongodb://localhost:27017/')
db = client["cidades"]
coluna = db["lista"]

@app.route('/')
def index():
    return render_template('index.html')

   
@app.route('/admin')
def admin():
    return render_template('formulario/index.html', dados = coluna.find())

@app.route("/api", methods=['GET', 'POST'])
def api():
    cursor = coluna.find() 
    list_cur = list(cursor) 
    json_data = dumps(list_cur, indent = 2, ensure_ascii=False)



           
    return (json_data)


@app.route('/admin/cadastro')
def cadastro():
    return render_template('formulario/cadastro.html')

@app.route("/admin/cadastrar", methods=['GET', 'POST'])
def cadastrar():
    if request.method == 'POST':
        cidade = request.form['nome_cidade']
        estado = request.form['nome_estado']
        video = request.form['link_video']
        video = video.replace('https://www.youtube.com/watch?v=', '')
        radio = request.form['link_radio']
        descricao = request.form['descricao']
        nomeRadio = request.form['nome_radio']

        id = coluna.find().limit(1).sort([('$natural',-1)])
        for doc in id:
            id = doc['id'] + 1
        
        cidades = { "id": id, "cidade": cidade, "estado" : estado, "linkYoutube" : video, "linkRadio" : radio, "nomeRadio" : nomeRadio, "descricao" : descricao }
        x = coluna.insert_one(cidades)   

        cursor = coluna.find() 
        list_cur = list(cursor) 
    json_data = dumps(list_cur, indent = 2, ensure_ascii=False)

    with open('static/data.json', 'w', encoding='utf8') as file: 
        file.write(json_data) 
        return redirect("/admin")



@app.route('/admin/editar/<id>')
def editar(id):
    id = int(id)
    dados = coluna.find_one({'id': id})
    print(dados)
    return render_template('formulario/editar.html', id = id, dados = dados)

@app.route('/admin/editado/<id>', methods=['POST', 'GET'])
def editado(id):
        cidade = request.form['nome_cidade']
        estado = request.form['nome_estado']
        video = request.form['link_video']
        video = video.replace('https://www.youtube.com/watch?v=', '')
        radio = request.form['link_radio']
        descricao = request.form['descricao']
        nomeRadio = request.form['nome_radio']
        id = int(id)
        alvo = {"id": id}

        novo = ([{"$set":  { "id": id, "cidade": cidade, "estado" : estado, "linkYoutube" : video, "linkRadio" : radio, "nomeRadio" : nomeRadio, "descricao" : descricao }}]) 
        coluna.update_one(alvo, novo) 

        cursor = coluna.find() 
        list_cur = list(cursor) 
        json_data = dumps(list_cur, indent = 2, ensure_ascii=False)

        with open('static/data.json', 'w', encoding='utf8') as file: 
          file.write(json_data) 
          
        return redirect("/admin")

@app.route('/admin/apagar/<id>')
def apagar(id):
    id = int(id)
    coluna.delete_one({'id': id})
    return redirect("/admin")  

    return render_template('admin.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)