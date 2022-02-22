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
            msg="";
            datos=JSON.parse(ajax.responseText);
            for (let index = 0; index < datos.length; index++) {
                const mensaje = datos[index];
                msg+=`<p><span>${mensaje.time}:  </span><span>${mensaje.usuario}: </span><span>${mensaje.mensaje}</span></p>`
            }
            document.getElementById("mensajes").innerHTML=msg;
        }
    }

    setInterval(()=>{
        let ajax=new XMLHttpRequest();
        ajax.open("GET","http://localhost:8085/apimsg",true);
        ajax.send()
        ajax.onload=()=>{
            msg="";
            datos=JSON.parse(ajax.responseText);
            for (let index = 0; index < datos.length; index++) {
                const mensaje = datos[index];
                msg+=`<p><span>${mensaje.time}:  </span><span>${mensaje.usuario}: </span><span>${mensaje.mensaje}</span></p>`
            }
            document.getElementById("mensajes").innerHTML=msg;
        }
    },1000)

}