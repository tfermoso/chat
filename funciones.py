
import json
def guardarMensaje(datos):
    mensajes=[]
    with open("mensajes.json",'r') as file:
        mensajes=json.load(file);
        file.close()

    mensajes.append(datos)    

    with open("mensajes.json",'w') as file:
        json.dump(mensajes,file,indent=2);
        file.close()
    return mensajes;

    
def leerMensajes():
    mensajes=[]
    with open("mensajes.json",'r') as file:
        mensajes=json.load(file);
        file.close()
    return mensajes;