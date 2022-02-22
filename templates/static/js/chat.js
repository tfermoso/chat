window.onload=()=>{
    document.getElementById("btnEnviar").onclick=()=>{
        msg=document.getElementById("msg").value;
        let ajax=new XMLHttpRequest();
        ajax.open("POST","http://localhost:8085/apimsg",true);
        ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify({
                mensaje: msg
            }));
        ajax.onload=()=>{
            console.log(ajax.responseText);
        }
    }

}