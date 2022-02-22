window.onload=()=>{
    document.getElementById("btnEnviar").onclick=()=>{
        msg=document.getElementById("msg").value;
        let ajax=new XMLHttpRequest();
        ajax.open("POST","http://localhost:8085/apimsg",true);
        ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify({
                "mensaje": msg
            }));
        ajax.onload=()=>{
            mostrarContenido(JSON.parse(ajax.responseText))
            
        }
    }

    setInterval(()=>{
        let ajax=new XMLHttpRequest();
        ajax.open("GET","http://localhost:8085/apimsg",true);
        ajax.send()
        ajax.onload=()=>{
            msg="";
            datos=JSON.parse(ajax.responseText);
            mostrarContenido(datos);
        }
    },1000)

    function mostrarContenido(datos){
        msg="";
        
        for (let index = 0; index < datos.length; index++) {
            const mensaje = datos[index];
            msg+=`${mensaje.time}:  ${mensaje.usuario}: ${mensaje.mensaje}\n`
        }
        document.getElementById("mensajes").innerHTML=msg;
        document.getElementById("mensajes").scrollTop=document.getElementById("mensajes").scrollHeight

    }
}

