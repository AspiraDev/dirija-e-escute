from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
app = Flask(__name__)
from bson.json_util import dumps, loads 
from bson import json_util, ObjectId
import os
import json
from db import *

@app.route('/')
def index():
    return render_template('index.html')

   
@app.route('/admin/<modalidade>', methods=['GET', 'POST'])
def admin(modalidade):
    if modalidade == 'andando':
        coluna = db["andando"]
        return render_template('formulario/index.html', dados = coluna.find())

    if modalidade == 'dirigindo':
        coluna = db["dirigindo"]
        return render_template('formulario/index.html', dados = coluna.find())



@app.route("/admin/add", methods=['GET', 'POST'])
def cadastrar():
    if request.method == 'POST':
        dados = request.get_json()
        modalidade = dados['modalidade']
        addCity(modalidade, dados)
        return redirect("/admin")
    #addCity(cadastrar)
    else:
        return redirect("/admin")

@app.route("/admin/get/<modalidade>/all", methods=['GET', 'POST'])
def puxarTudo(modalidade):
    return json.loads(json_util.dumps(getAll(modalidade)))

@app.route("/admin/get/<modalidade>/<id>", methods=['GET', 'POST'])
def puxar(modalidade, id):
    return json.loads(json_util.dumps(getCity(modalidade, id)))

@app.route("/api/<cidade>", methods=['GET', 'POST'])
def radio(cidade):
        radio = getRadio(cidade)
        video = getVideo(cidade)
        estado = getEstado(cidade)
        descricao = getDescription(cidade)
        data = {
            "cidade": estado[0],
            "estado": estado[1],
            "linkRadio": radio[1],
            "nomeRadio": radio[0],
            "video": video,
            "descricao": descricao
        }
        return json.loads(json_util.dumps(data))



@app.route('/admin/edit/<id>', methods=['GET', 'POST'])
def editar(id):
    if request.method == 'POST':
        dados = request.get_json()
        modalidade = dados['modalidade']
        editCity(modalidade, id, dados)
        return redirect("/admin")

@app.route('/admin/apagar/<modalidade>/<id>')
def apagar(modalidade, id):
    delCity(modalidade, id)
    return redirect("/admin/"+modalidade)  

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)