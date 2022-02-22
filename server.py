
import re
from flask import Flask,redirect,url_for,make_response
from flask import render_template
from flask import request,session,jsonify
import os
import pathlib
import json
import funciones as func
from datetime import datetime

# creates a Flask application, named app
app = Flask(__name__,static_folder='templates/static')

@app.route("/",methods=["GET","POST"])
def login():   
    if(request.method=="GET"):
        return render_template("index.html");
    else:
        usuario=request.form["usuario"];
        session["usuario"]=usuario;
        return redirect(url_for("chat"));

@app.route("/chat")
def chat():
    if("usuario" in session.keys()):
        return render_template("chat.html",usr=session["usuario"]);
    else:
        return redirect(url_for("login"));

@app.route("/apimsg",methods=["POST","GET"])
def api():
    if(request.method=="POST"):
        mensaje=request.get_json()
        datos={
            "usuario":session["usuario"],
            "mensaje":mensaje["mensaje"],
            "time": datetime.now().strftime("%d-%m-%y %H:%M:%S:")
        }
        data=func.guardarMensaje(datos)
        return jsonify(data);
    else:
        datos=func.leerMensajes();
        return jsonify(datos);

# run the application
if __name__ == "__main__":
    app.secret_key = "generador de claves de sesión"
    app.run(host="localhost",port=8085,debug=True)