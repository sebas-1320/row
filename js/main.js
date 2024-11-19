
function cambiarTexto(){

    const selectorTitulo = document.getElementById('titulo');
    const nombreUsuario = prompt("Ingrese su nombre");
    const contenedor = document.getElementById('cont-general');
    // cambiando contenido de una eetiqueta desde js
    selectorTitulo.innerText = "Óscar Castro";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong> " + nombreUsuario;
    //cambiando estilos de una etiqueta dede js
    selectorTitulo.style.backgroundColor = "white";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px"
    //cambiando estrutura  de una etiqueta desde js
    contenedor.classList.add('dia');
}

function Circulo(){
    const selectorTitulo = document.getElementById('titulo');
    const circulo = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');
    selectorTitulo.innerText = " Circulo";
    circulo.style.borderRadius = "50%";
    circulo.style.backgroundColor = "#8400ff";
}

function Rombo(){
    const selectorTitulo = document.getElementById('titulo');
    const rombo = document.getElementById('figura');
    selectorTitulo.innerText = " Rombo";
    rombo.style.rotate = "45deg"
    rombo.style.borderRadius = "0"
    rombo.style.backgroundColor = "#460088";
}

function FondoColor(){
    const fondo = document.getElementById('cont-general');
    fondo.style.background = "white";
}

function FondoImagen(){
    const fondoImg = document.getElementById('cont-general');
    fondoImg.style.backgroundImage  = "url('img/fondo incap 2023.jpeg')";
}

function BtnTop(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');
    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.right = 0;
    figura.style.left = 0;
}

function BtnLeft(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');
    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.left = 0;
    
}

function BtnRight(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');
    figura.style.position = "absolute";
    figura.style.top = 0;
    figura.style.right = 0;
}

function BtnBottom(){
    const selectorTitulo = document.getElementById('titulo');
    const figura = document.getElementById('figura');
    figura.style.position = "absolute";
    figura.style.top = 1000;
    figura.style.right = 0;
    figura.style.left = 0;
}

function Diagonal(){
    
}


function Animacion(){
    
}

function FonDegradado(){
    const fondo = document.getElementById('cont-general');
    fondo.style.background = "linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(0,105,61,1) 70%, rgba(0,196,151,1) 100%)"
}

function BtnEstrella(){
    const selectorTitulo = document.getElementById('titulo');
    const estrella = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');
    selectorTitulo.innerText = " Estrella";
    estrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    estrella.style.backgroundColor = "#8400ff";
}

function Panel_Lateral(){
    const panel = document.getElementById("Panel_Lateral");
    panel.classList.toggle("active");
}

function Panel_Superior(){
    const panel = document.getElementById("Panel_Superior");
    panel.classList.toggle("active");
}