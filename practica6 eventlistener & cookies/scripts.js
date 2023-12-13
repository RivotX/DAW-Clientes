function ej1() {
  var divPosicion = document.getElementById("divPosicion");
  var divBoton = document.getElementById("Divboton");

  function mostrarPosicion(event) {
    var posX = event.clientX;
    var posY = event.clientY;
    document.getElementById("posicion").innerText =
      "(" + posX + "," + posY + ")";
  }

  function mostrarBoton(event) {
    var boton;
    if (event.button === 0) {
      boton = "Izquierdo";
    } else if (event.button === 1) {
      boton = "Central";
    } else if (event.button === 2) {
      boton = "Derecho";
    } else {
      boton = "Desconocido";
    }
    document.getElementById("mostrarboton").innerText = boton;
  }

  divPosicion.addEventListener("mousemove", mostrarPosicion);

  divBoton.addEventListener("mousedown", mostrarBoton);
  divBoton.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
}

function ej2() {
  body = document.body;
  var span = document.getElementById("letra");
  console.log(span);

  function teclapulsada(e) {
    var letra = e.key;
    console.log(letra);
    span.innerText = "tecla pulsada: " + letra;
  }

  body.addEventListener("keydown", teclapulsada);
}

function ej3() {
  body = document.body;
  div = document.getElementById("div");

  teclasValidas = [
    "a",
    "s",
    "d",
    "w",
    "ArrowDown",
    "ArrowUp",
    "ArrowRight",
    "ArrowLeft",
  ];
  function teclapulsada(e) {
    var letra = e.key;

    console.log(letra);

    if (teclasValidas.includes(letra)) {
      if(tecla=="a" || tecla == "ArrowRight"){
        
      }
    }
  }

  body.addEventListener("keydown", teclapulsada);
}
