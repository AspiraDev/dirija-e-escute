from pymongo import MongoClient
from flask import Flask, request
from bson.objectid import ObjectId
import requests
import random
from youtubesearchpython import VideosSearch
import wikipedia

client = MongoClient(
  'mongodb+srv://aspira:88382724@cluster0.f3vuu1b.mongodb.net/?retryWrites=true&w=majority'
)
db = client["listen"]


def addCity(modalidade, dados):
  coluna = db[modalidade]
  coluna.insert_one(dados)
  return "Cidade adicionada com sucesso!"


def editCity(modalidade, dados, id):
  coluna = db[modalidade]
  coluna.update_one({"_id": ObjectId(id)}, dados)
  return "Cidade editada com sucesso!"


def getCity(modalidade, id):
  coluna = db[modalidade]
  return coluna.find({"_id": ObjectId(id)})


def getAll(modalidade):
  coluna = db[modalidade]
  return coluna.find({})


def delCity(modalidade, id):
  coluna = db[modalidade]
  coluna.delete_one({"_id": ObjectId(id)})
  return "Cidade deletada com sucesso!"


def getRadio(cidade):
  try:
    r = requests.get(f'https://radio.garden/api/search?q={cidade}').json()
    codigoCidade = r['hits']['hits'][0]['_source']['url']

    r = requests.get(
      f'https://radio.garden/api/ara/content/page/{codigoCidade[-8:]}').json()
    radioCidade = r['data']['content'][0]['items']
    radioCidade.pop()

    radioCidade = random.choice(radioCidade)

    nomeRadio = radioCidade['title']
    linkRadio = f"https://radio.garden/api/ara/content/listen/{radioCidade['href'][-8:]}/channel.mp3"

    return [nomeRadio, linkRadio]
  except:
    return [" ", " "]


def getVideo(cidade):
  try:
    videosSearch = VideosSearch(f'{cidade} driving 4k', limit=1)
    link = videosSearch.result()
    id = link['result'][0]['id']
    return id
  except:
    return " "


def getDescription(cidade):
  try:
    wikipedia.set_lang("pt")
    cidade = wikipedia.summary(cidade, sentences=3)
    return cidade
  except:
    return " "


def getEstado(cidade):
  try:
    r = requests.get(
      f'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{cidade}'
    ).json()
    estado = r['microrregiao']['mesorregiao']['UF']['nome']
    cidade = r['nome']
    return cidade, estado
  except:
    return [cidade, " "]
