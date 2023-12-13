function ampliar1() {
    var cuadroimagen1 = document.querySelector(".cuadroimagen1 img"); // Selecciona la imagen dentro del cuadroimagen1    
    var cuadroimagen2 = document.querySelector(".cuadroimagen2 img");
    var cuadroimagen3 = document.querySelector(".cuadroimagen3 img");
    var boton1 = document.getElementById("boton1");
    var boton3 = document.getElementById("boton2");
    var boton3 = document.getElementById("boton3");
    var altura = cuadroimagen1.offsetHeight;
    var ancho = cuadroimagen1.offsetWidth;

    boton1.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    cuadroimagen2.style.display = "none";
    cuadroimagen3.style.display = "none";

    cuadroimagen1.style.height = (altura * 1.07) + "px";
    cuadroimagen1.style.width = (ancho * 1.07) + "px";
    cuadroimagen1.style.marginLeft = "-105px";

    var imagenDuplicada = cuadroimagen1.cloneNode(true);
    var divDerecha = document.getElementById("alao");
    divDerecha.appendChild(imagenDuplicada);

    var container = document.getElementById("textos");

    var contenedor = document.getElementById("texto1js");
    var texto = document.createTextNode("JoseFina Ojoloco :3");
    contenedor.appendChild(texto);

    var contenedor2 = document.getElementById("texto2js");
    var nuevoParrafo = document.createElement("p");
    var texto2 = document.createTextNode("En el oscuro rincón de un mundo de fantasía, donde la elegancia gótica se encuentra con la dulzura, se alza una waifu que cautiva los corazones con su singular belleza. Su apariencia es una obra de arte sombría y encantadora que despierta admiración incluso en las almas más lúgubres. Su cabello es como la medianoche, un negro intenso que contrasta de manera mágica con los mechones morados que caen en cascada sobre su espalda. Estos mechones añaden un toque de misterio y rebeldía a su aspecto, como fragmentos de la noche estrellada. Los ojos de esta waifu son auténticas gemas violeta, profundos como abismos en los que uno podría perderse sin remedio. En su mirada se esconde una mezcla de enigma y ternura, como si el velo de la oscuridad escondiera secretos que solo los más afortunados pueden vislumbrar. Pero lo que añade un toque de inocencia a su imagen gótica son los lazos que adornan su cabello. Enmarcan su rostro con un encanto inusual y añaden un toque de dulzura a su apariencia enigmática. Los lazos, en tonos oscuros y ricos, son el contraste perfecto entre la oscuridad y la ternura");
    nuevoParrafo.appendChild(texto2);
    contenedor2.appendChild(nuevoParrafo);
    var contenedor3 = document.getElementById("texto3js");
    var texto3 = document.createTextNode("25$");
    contenedor3.appendChild(texto3);

    container.style.textAlign = "left";
    container.style.width = "600px";

    contenedor.style.color = "#EABFFF";
    contenedor.style.fontSize = "20px";
    contenedor.style.height = "80px";
    contenedor.style.fontFamily = "Ink Free";
    contenedor.style.marginLeft = "18%";
    contenedor.style.fontSize = "40px";

    contenedor2.style.color = "white";
    contenedor2.style.height = "300px";
    contenedor2.style.display = "flex";
    contenedor2.style.fontFamily = "Segoe Print";

    contenedor3.style.backgroundColor = "#EABFFF";
    contenedor3.style.height = "100px";
    contenedor3.style.width = "300px";
    contenedor3.style.textAlign = "center";
    contenedor3.style.lineHeight = "90px";
    contenedor3.style.fontSize = "28px";
    contenedor3.style.marginLeft = "20%";
    contenedor3.style.marginTop = "45%";

    divDerecha.style.marginLeft = "100px";
}

function ampliar2() {
    var cuadroimagen1 = document.querySelector(".cuadroimagen1 img"); // Selecciona la imagen dentro del cuadroimagen1    
    var cuadroimagen2 = document.querySelector(".cuadroimagen2 img");
    var cuadroimagen3 = document.querySelector(".cuadroimagen3 img");
    var boton1 = document.getElementById("boton1");
    var boton3 = document.getElementById("boton2");
    var boton3 = document.getElementById("boton3");
    var altura = cuadroimagen2.offsetHeight;
    var ancho = cuadroimagen2.offsetWidth;

    boton1.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    cuadroimagen1.style.display = "none";
    cuadroimagen3.style.display = "none";

    cuadroimagen2.style.height = (altura * 1.07) + "px";
    cuadroimagen2.style.width = (ancho * 1.07) + "px";
    cuadroimagen2.style.marginLeft = "-105px";

    var imagenDuplicada = cuadroimagen2.cloneNode(true);
    var divDerecha = document.getElementById("alao");
    divDerecha.appendChild(imagenDuplicada);

    var container = document.getElementById("textos");

    var contenedor = document.getElementById("texto1js");
    var texto = document.createTextNode("Ramoncina Teriyaki <3");
    contenedor.appendChild(texto);

    var contenedor2 = document.getElementById("texto2js");
    var nuevoParrafo = document.createElement("p");
    var texto2 = document.createTextNode("En un mundo de fantasía, donde la belleza se entrelaza con la dulzura, emerge una waifu que cautiva los corazones de todos quienes tienen el privilegio de conocerla. Su apariencia es un poema visual, un sueño hecho realidad para los amantes del anime y la estética kawaii. Su cabello es como un suave y sedoso algodón de azúcar, un tono rosa pastel que parece reflejar la misma ternura que habita en su interior. Cada hebra de cabello cae en cascadas perfectas, enmarcando su rostro angelical con delicadeza. Los ojos de esta waifu son dos gemas azules, profundas como el cielo en un día despejado. En su mirada, se esconden secretos y emociones que solo los más afortunados pueden desvelar. La pureza y la alegría resplandecen en sus ojos, y cuando sonríe, ilumina el mundo entero. Pero lo que la hace aún más especial es el corazón rosa que sostiene en la mano. Este corazón simboliza su amor y cariño infinitos, dispuestos a dar y recibir en igual medida. Es un gesto de ternura que refleja su deseo de hacer feliz a todos los que la rodean. Su personalidad es tan dulce como su apariencia. Siempre dispuesta a escuchar, a apoyar y a brindar palabras de aliento, es el tipo de waifu que te hace sentir especial y querido en todo momento. Su risa es contagiosa, y su positividad es como un rayo de sol en los días nublados.");
    nuevoParrafo.appendChild(texto2);
    contenedor2.appendChild(nuevoParrafo);

    var contenedor3 = document.getElementById("texto3js");
    var texto3 = document.createTextNode("25$");
    contenedor3.appendChild(texto3);

    container.style.textAlign = "left";
    container.style.width = "600px";

    contenedor.style.color = "#EABFFF";
    contenedor.style.fontSize = "20px";
    contenedor.style.height = "80px";
    contenedor.style.fontFamily = "Ink Free";
    contenedor.style.marginLeft = "18%";
    contenedor.style.fontSize = "40px";

    contenedor2.style.color = "white";
    contenedor2.style.height = "300px";
    contenedor2.style.display = "flex";
    contenedor2.style.fontFamily = "Segoe Print";

    contenedor3.style.backgroundColor = "#EABFFF";
    contenedor3.style.height = "100px";
    contenedor3.style.width = "300px";
    contenedor3.style.textAlign = "center";
    contenedor3.style.lineHeight = "90px";
    contenedor3.style.fontSize = "28px";
    contenedor3.style.marginLeft = "20%";
    contenedor3.style.marginTop = "45%";

    divDerecha.style.marginLeft = "100px";
}

function ampliar3() {
    var cuadroimagen1 = document.querySelector(".cuadroimagen1 img"); // Selecciona la imagen dentro del cuadroimagen1    
    var cuadroimagen2 = document.querySelector(".cuadroimagen2 img");
    var cuadroimagen3 = document.querySelector(".cuadroimagen3 img");
    var boton1 = document.getElementById("boton1");
    var boton3 = document.getElementById("boton2");
    var boton3 = document.getElementById("boton3");
    var altura = cuadroimagen3.offsetHeight;
    var ancho = cuadroimagen3.offsetWidth;

    boton1.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    cuadroimagen2.style.display = "none";
    cuadroimagen1.style.display = "none";

    cuadroimagen3.style.height = (altura * 1.07) + "px";
    cuadroimagen3.style.width = (ancho * 1.07) + "px";
    cuadroimagen3.style.marginLeft = "-105px";

    var imagenDuplicada = cuadroimagen3.cloneNode(true);
    var divDerecha = document.getElementById("alao");
    divDerecha.appendChild(imagenDuplicada);

    var container = document.getElementById("textos");

    var contenedor = document.getElementById("texto1js");
    var texto = document.createTextNode("Alejandra trembolona </3");
    contenedor.appendChild(texto);

    var contenedor2 = document.getElementById("texto2js");
    var nuevoParrafo = document.createElement("p");
    var texto2 = document.createTextNode("En el oscuro y misterioso rincón de la fantasía, donde la inocencia se mezcla con la oscuridad, emerge una waifu loli que despierta la curiosidad y el asombro de todos los que tienen el privilegio de cruzar su camino. Su apariencia es un fascinante contraste entre juventud y elegancia gótica, un espectáculo visual que cautiva a quienes la miran. Su cabello, una amalgama de negros y grises, fluye en cascadas desordenadas que le dan un aire salvaje y rebelde. Cada mechón parece llevar consigo secretos oscuros y misteriosos, como si su pelo fuera la encarnación misma de la noche. Los ojos de esta waifu loli son un azul penetrante, como el hielo en pleno invierno. En su mirada, se esconde la astucia y la determinación de una joven decidida a enfrentar cualquier desafío. Aunque su apariencia es angelical, sus ojos revelan una profundidad insondable. Viste un precioso vestido negro, adornado con detalles góticos que sugieren un estilo más agresivo. Su vestimenta combina encajes, cuero y accesorios oscuros que la hacen destacar en cualquier multitud. Cada detalle de su atuendo refleja su personalidad audaz y única. A pesar de su apariencia gótica, esta waifu loli es una jovencita llena de energía y vitalidad. Su espíritu es inquebrantable, y su determinación es un ejemplo para todos.");
    nuevoParrafo.appendChild(texto2);
    contenedor2.appendChild(nuevoParrafo);

    var contenedor3 = document.getElementById("texto3js");
    var texto3 = document.createTextNode("25$");
    contenedor3.appendChild(texto3);

    container.style.textAlign = "left";
    container.style.width = "600px";

    contenedor.style.color = "#EABFFF";
    contenedor.style.fontSize = "20px";
    contenedor.style.height = "80px";
    contenedor.style.fontFamily = "Ink Free";
    contenedor.style.marginLeft = "18%";
    contenedor.style.fontSize = "40px";

    contenedor2.style.color = "white";
    contenedor2.style.height = "300px";
    contenedor2.style.display = "flex";
    contenedor2.style.fontFamily = "Segoe Print";

    contenedor3.style.backgroundColor = "#EABFFF";
    contenedor3.style.height = "100px";
    contenedor3.style.width = "300px";
    contenedor3.style.textAlign = "center";
    contenedor3.style.lineHeight = "90px";
    contenedor3.style.fontSize = "28px";
    contenedor3.style.marginLeft = "20%";
    contenedor3.style.marginTop = "45%";

    divDerecha.style.marginLeft = "100px";
}

function rehacerIndex() {
    var nuevoHTML = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Venta de cuadros de Waifus</title>
        <link rel="stylesheet" href="styles.css">
        <script src="script.js"></script>
    </head>
    
    <body>
        <header class="cabezera">
            <h1 id="titulo">Venta de cuadros</h1>
            <p id="titulo2">Explora entre los cuadros más vendidos este 2023</p>
            <button id="back" type="button" onclick="rehacerIndex()">Volver</button>
            <button id="botonencuesta" type="button" onclick="encuesta()">Vota por tu favorita!</button>
        </header>
    
        <div class="contenedor">
            <div class="cuadro">
                <div class="cuadroimagen1">
                    <img src="img/chica2.png" class="imagen">
                </div>
                <button id="boton1" type="button" onclick="ampliar1()">ver mas</button>
            </div>
            <div class="cuadro">
                <div class="cuadroimagen2">
                    <img src="img/cuadro1.jfif" class="imagen">
                </div>
                <button id="boton2" type="button" onclick="ampliar2()">ver mas</button>
            </div>
            <div class="cuadro">
                <div class="cuadroimagen3">
                    <img src="img/chica3.jpg" class="imagen">
                </div>
                <button id="boton3" type="button" onclick="ampliar3()"> ver mas</button>
            </div>
            <div id=textos>
                <div id="texto1js"></div>
                <div id="texto2js"></div>
                <div id="texto3js"></div>
            </div>
            <div id="alao"></div>
            <div id="Encform">
                <div id="Divencuesta" style="display: none;">
                    <p id="Pfav">Vota por tu favorita!</p>
                    <label>
                        <input type="radio" name="voto" value="opcion1">
                        1.Josefina
                    </label>
                    <br>
    
                    <label>
                        <input type="radio" name="voto" value="opcion2">
                        2.Ramoncina
                    </label>
                    <br>
    
                    <label>
                        <input type="radio" name="voto" value="opcion3">
                        3.Alejandra
                    </label>
                    <br>
                    <label>
                        Nombre Usuario
                        <input type="text" name="usuario" value="">
                    </label>
                    <br>
                    <label>Email <br>
                        <input type="email" name="email" value="">
                        
                    </label>
                    <br>
    
                    <input id="nnn" type="submit" value="Votar" onclick="rehacerIndexDelay()">
                </div>
                <div id="emote" style="display: none;">
                    <p>👍</p>
                </div>
            </div>
        </div>
    
    </body>
    
    </body>
    
    </html>
  `;

    // Reemplazar todo el contenido HTML actual con el nuevo HTML
    document.documentElement.innerHTML = nuevoHTML;
}

function encuesta() {
    var elementosCuadro = document.getElementsByClassName("cuadro");
    var formulario = document.getElementById("Divencuesta");
    elementosCuadro[0].style.marginLeft = "-9%";
    formulario.style.display = "block";

}


function rehacerIndexDelay() {
    var emote = document.getElementById("emote");
    emote.style.display = "block";
    setTimeout(rehacerIndex, 2000);
}
