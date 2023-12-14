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
  let body = document.body;
  let div = document.getElementById("div");
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
    var tecla = e.key;
    var leftValue = parseInt(div.style.left) || 0;
    var topValue = parseInt(div.style.top) || 0;
    var moveLeft = -20;
    var moveRight = 20;
    var moveUp = -20;
    var moveDown = 20;

    if (
      teclasValidas.includes(tecla) &&
      !(leftValue < 0 || leftValue > 1820 || topValue < 0 || topValue > 860)
    ) {
      if (tecla === "a" || tecla === "ArrowLeft") {
        if (leftValue !== 0) {
          div.style.left = leftValue + moveLeft + "px";
        }
      } else if (tecla === "d" || tecla === "ArrowRight") {
        if (leftValue !== 1820) {
          div.style.left = leftValue + moveRight + "px";
        }
      } else if (tecla === "w" || tecla === "ArrowUp") {
        if (topValue !== 0) {
          div.style.top = topValue + moveUp + "px";
        }
      } else if (tecla === "s" || tecla === "ArrowDown") {
        if (topValue !== 860) {
          div.style.top = topValue + moveDown + "px";
        }
      }
    }
  }

  body.addEventListener("keydown", teclapulsada);
}

function EjexpresionRegular() {
  function validarDNI(dni) {
    const dniRegex = /^[0-9]{8}[A-Z]$/;

    if (!dniRegex.test(dni)) {
      return false;
    }

    const digitos = dni.slice(0, 8);
    const letra = dni.charAt(8);

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraEsperada = letras[digitos % 23];

    if (letra !== letraEsperada) {
      return false;
    }

    return true;
  }

  const dni1 = "12345678Z";
  const dni2 = "98765432zX";

  console.log(validarDNI(dni1));
  console.log(validarDNI(dni2));
}
