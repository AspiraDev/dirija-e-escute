# Dirija e Escute
Escolha uma cidade e curta um belo passeio enquanto ouve uma rádio local.


## Linguagem e bibliotecas usadas
```sh
python==3.10
jquery==3.2.1
flask==2.2.2
pymongo==4.2.0
```

## Instalação

```sh
# Clone o repositório 
git clone https://github.com/AspiraDev/dirija-e-escute.git

# Mude o diretorio
cd dirija-e-escute

# Instale as dependências
pip install flask
pip install pymongo
pip install youtubesearchpython
pip install wikipedia
```

## Instruções
```sh
1. Configure seu banco de dados MongoDB em: db.py

2. Rode o projeto
> set FLASK_ENV=development
> set FLASK_APP=main.py
> flask --app main.py --debug run

3. Adicione as informações no painel de administrador:
http://127.0.0.1:5000/admin/dirigindo
```

4. Acesse em:
http://127.0.0.1:5000/
```

## Live Preview
https://dirigindo.ouvindo.repl.co/