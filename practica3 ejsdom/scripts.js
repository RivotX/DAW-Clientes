function MostrarEnlace() {
    const div = document.getElementById("div");
    const link = document.getElementById("link");
    var text = link.href;
    console.log(text);

    var texto = document.createTextNode(text + "   ");
    div.appendChild(texto);
}
function CambiarURL() {
    const enlace = document.getElementById("enlace");
    enlace.innerHTML = '<a id="link" href="https://twitter.com/?lang=es"> he cambiado </a>';
    const link = document.getElementById("link");
}

function cambio() {
    const p1 = document.getElementById("p1id");
    const p2 = document.getElementById("p2id");


    if (p1.className == "uno") {
        p1.className = "dos";
    } else if (p1.className == "dos") {
        p1.className = "uno";
    }

    if (p2.className == "uno") {
        p2.className = "dos"
    } else if (p2.className == "dos") {
        p2.className = "uno"
    }

    console.log("p1 = " + p1.className);
    console.log("p2 = " + p2.className);
}



function sumar() {
    var valor = parseInt(document.getElementById("resultado").innerHTML);
    valor++;
    resultado = valor;
    document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
    var valor = parseInt(document.getElementById("resultado").innerHTML);
    valor--;
    resultado = valor;
    document.getElementById("resultado").innerHTML = resultado;
}


var miImg = document.getElementById('carrusel');

var imagen = ["../images/imagen1.jpg", "../images/imagen2.jpg", "../images/imagen3.jpg", "../images/imagen4.jpg", "../images/imagen5.jpg"];

var imgPosi = -1;

function cambiarD() {
    imgPosi++;

    if (imgPosi > imagen.length - 1) {
        imgPosi = imagen.length - 1;
    }
    miImg.setAttribute("src", imagen[imgPosi]);
}

function cambiarI() {
    imgPosi--;

    if (imgPosi < 0) {
        imgPosi = 0;
    }
    miImg.setAttribute("src", imagen[imgPosi]);
}

function showDimensions() {
    const tabla = document.getElementById('tablaej2');
    console.log(tabla.offsetHeight);
    console.log(tabla.offsetWidth);

    const muestradimensiones = document.getElementById("muestradimensiones");
    muestradimensiones.innerHTML = "La altura de la tabla es: " + tabla.offsetHeight + " y la anchura: " + tabla.offsetWidth;
    muestradimensiones.style.display = "block";

    setTimeout(function () {
        var nuevaAltura = prompt("Nueva Altura");
        var nuevaAnchura = prompt("Nueva Anchura");

        tabla.style.width = nuevaAnchura + "px";
        tabla.style.height = nuevaAltura + "px";
        muestradimensiones.innerHTML = "La altura de la tabla es: " + tabla.offsetHeight + " y la anchura: " + tabla.offsetWidth;
    }, 0); //0s
}

function valorborde() {
    const tabla = document.getElementById('tablaej2');
    const textomostrar = document.getElementById("mostrar")
    textomostrar.innerHTML = "el valor del borde de la tabla es: " + tabla.style.border;

    setTimeout(function () {
        var nuevoBorde = prompt("Nueva anchura del borde");
        tabla.style.border = nuevoBorde + "px solid black";
    }, 0); //0s

}

var pulsaciones = 2;
function cambiarposicion() {
    const divtabla = document.getElementById("divtabla");
    const tabla = document.getElementById('tablaej2');
    pulsaciones++;

    if (pulsaciones % 3 == 0) {
        tabla.style.marginLeft = "2px";
    }
    if (pulsaciones % 3 == 1) {
        tabla.style.marginLeft = "80%";

    }
    if (pulsaciones % 3 == 2) {
        tabla.style.marginRight = "auto";
        tabla.style.marginLeft = "auto";
    }

}


function derecha() {
    var corredor = document.getElementById("corredor");
    var posicion = window.getComputedStyle(corredor);

    var posicionActual = parseInt(posicion.left);

    var nuevaPosicion = posicionActual + 5 + "px";


    if (posicionActual <= 2200) {

        corredor.style.left = nuevaPosicion;
        console.log('corredor.style.left :>> ', corredor.style.left);
    }

}

function izquierda() {
    var corredor = document.getElementById("corredor");
    var posicion = window.getComputedStyle(corredor);

    var posicionActual = parseInt(posicion.left);
    var nuevaPosicion = posicionActual - 5 + "px";


    if (posicionActual >= 0) {

        corredor.style.left = nuevaPosicion;
        console.log('corredor.style.left :>> ', corredor.style.left);

    }
}
function cambio1() {
    const p1 = document.getElementById("p1id");
    const p2 = document.getElementById("p2id");

    var p1color = p1.style.backgroundColor;
    var p2color = p2.style.backgroundColor;

    console.log(p1color);

    if (p1color == "" || p1color == "greenyellow") {

        p1.style.backgroundColor = "rgb(0, 0, 0)";
        p1.style.border = "1px solid";
        p1.style.borderColor = "rgb(255, 27, 27)";
        p1.style.fontSize = "x-small";
        p1.style.color = "white";

        p2.style.backgroundColor = "greenyellow";
        p2.style.border = "1px solid";
        p2.style.borderColor = "black";
        p2.style.fontSize = "large";
        p2.style.color = "black";


    }

    else if (p1.style.backgroundColor == "rgb(0, 0, 0)") {

        p1.style.backgroundColor = "greenyellow";
        p1.style.border = "1px solid";
        p1.style.borderColor = "black";
        p1.style.fontSize = "large";
        p1.style.color = "black"

        p2.style.backgroundColor = "rgb(0, 0, 0)";
        p2.style.border = "1px solid";
        p2.style.borderColor = "rgb(255, 27, 27)";
        p2.style.fontSize = "x-small";
        p2.style.color = "white";

    }


}
function ej6(element) {

    if (element.id == "boton1") {
        document.body.style.backgroundColor = "red";
    } else if (element.id == "boton2") {
        document.body.style.backgroundColor = "blue";
    } else if (element.id == "boton3") {
        document.body.style.backgroundColor = "green";
    } else if (element.id == "boton4") {
        document.body.style.backgroundColor = "black";
    } else if (element.id == "boton5") {
        document.body.style.backgroundColor = "brown";
    }

}

function changeBackgroundColor(element) {
    if (element.id === "div1") {
        document.body.style.backgroundColor = element.style.backgroundColor;
    }
    if (element.id === "div2") {
        document.body.style.backgroundColor = element.style.backgroundColor;
    }
    if (element.id === "div3") {
        document.body.style.backgroundColor = element.style.backgroundColor;
    }
}
function volver() {
    document.body.style.backgroundColor = "white";
}




let tiempobarra1;
let tiempobarra2;
let carga1 = false;
let carga2 = false;

function cargarBarra1() {
    if (carga1) {
        return;
    }
    const barra = document.getElementById('progreso1');
    let valor = 0;
    barra.value = valor;
    carga1 = true;

    tiempobarra1 = setInterval(function () {
        valor++;
        barra.value = valor;

        if (valor >= 100) {
            clearInterval(tiempobarra1);
            alert('La barra 1 ha sido completada');
            carga1 = false;
        }
    }, 5);
}

function cargarBarra2() {
    if (carga2) {
        return;
    }
    const barra = document.getElementById('progreso2');
    let valor = 0;
    barra.value = valor;
    carga2 = true;

    tiempobarra2 = setInterval(function () {
        valor++;
        barra.value = valor;

        if (valor >= 100) {
            clearInterval(tiempobarra2);
            alert('La barra 2 ha sido completada');
            carga2 = false
        }
    }, 400);
}

//EJERCICIO 11
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
div2.style.visibility = "hidden";
div3.style.display = "none";

function muestradiv() {
    div2.style.visibility = "visible";
    div3.style.display = "block"
}

//EJERCICIO 12

function mostrarocultar() {
    var parrafo = document.getElementById("parrafo");
    var boton = document.getElementById("boton");
    console.log('parrafo.style.display :>> ', parrafo.style.display);
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
        boton.textContent = "Ocultar";
    } else {
        parrafo.style.display = "none";
        boton.textContent = "Mostrar";
    }

}