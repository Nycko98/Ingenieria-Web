let elemento=document.createElement("h1");
elemento.setAttribute("id","titulo");
elemento.textContent="hola";
document.getElementById('prueba').appendChild(elemento);

let evento=document.getElementById("producto");
evento.style.background="#000";