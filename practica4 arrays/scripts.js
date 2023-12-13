
function ej1() {
    var numeros;
    var array = [];
    while (numeros != "n") {
        numeros = prompt("introduce el numero o pulsa 'n' para salir");

        if (numeros == "n") {
            break;
        } else {
            array.push(parseInt(numeros));
        }
    }

    console.log('array :>> ', array);

    function pp(array) {
        var arrayresultado = [];
        var suma = 0;

        for (var i = 0; i < array.length; i++) {
            suma = suma + array[i];
            arrayresultado.push(suma);
        }
        console.log('arrayresultado :>> ', arrayresultado);

    }
    pp(array);
}
function ej2() {
    var x = prompt('numero X');
    var y = prompt('numero Y');

    function countBy(x, y) {
        var arrayresultado = [];

        if (x < 0 || y < 0) {
            console.log('arrayresultado :>> ', arrayresultado);
        } else {

            for (let i = 1; i <= y; i++) {
                num = x * i;
                arrayresultado.push(num);
            }

            console.log('arrayresultado :>> ', arrayresultado);
        }
    }
    countBy(x, y);
}

function ej3() {
    var numero;
    var flag = false;
    do {
        numero = prompt('Introduce número:');
        if (numero > 2) {
            flag = true;
        }
    } while (!flag);

    let matriz = new Array(numero); //filas //guarda el numero que le han dado en un array llamado matriz
    for (let i = 0; i < numero; i++) {
        matriz[i] = new Array(numero);  //columnas
    }
    var indicemult = 1;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = numero * indicemult;
            indicemult++;
        }
    }
    console.log(matriz); // para que se muestre en consola el resultado
}

function ej4() {
    var array1 = [];
    var array2 = [];
    var opcion = "d";
    var opcion2 = "d";


    while (opcion != "n") {
        opcion = prompt("ingresa valores al array1, pulsa 'n' para salir");

        if (opcion == "n") {
            break;
        }
        array1.push(opcion);
    }
    while (opcion2 != "n") {
        opcion2 = prompt("ingresa valores al array2, pulsa 'n' para salir");

        if (opcion2 == "n") {
            break;
        }
        array2.push(opcion2);
    }
    console.log('array1 :>> ', array1);
    console.log('array2 :>> ', array2);

    function arrayMasLargo(array1, array2) {

        if (array1.length > array2.length) {
            return array1;
        } else if (array2.length > array1.length) {
            return array2;
        } else {
            return array1;
        }
    }
    var arraylargo = arrayMasLargo(array1, array2);

    function Farraypeque(array1, array2) {
        var arraylargo = arrayMasLargo(array1, array2);
        if (arraylargo == array1) {
            return array2;
        } else {
            return array1;
        }
    }

    var arraypeque = Farraypeque(array1, array2);

    function compararArrays(arraypeque, arraylargo) {
        const elementosComunes = [];

        for (const elemento of arraypeque) {
            if (!arraylargo.includes(elemento)) {
                elementosComunes.push(elemento);
            }
        }
        for (const elemento of arraylargo) {
            if (!arraypeque.includes(elemento) && !elementosComunes.includes(elemento)) {
                elementosComunes.push(elemento);
            }
        }

        return elementosComunes;
    }
    elementosComunes = compararArrays(arraylargo, arraypeque);

    elementosComunes.sort(function (a, b) {
        return a - b;
    });

    console.log('elementosComunes :>> ', elementosComunes);
}

function ej7() {
    var opcion = 0;
    var vector = [];
    while (opcion != "1") {
        opcion = prompt("ingresa valores al array1, pulsa '1' para salir");
        if (opcion == "1") {
            break;
        }
        vector.push(opcion);
    }
    var vectorPrueba = ["Alex", "Jacob", "Mark", "Max"];
    // var vectorPrueba = ["Alex", "Juan"];
    function likes(vector) {
        var resultado;
        if (vector.length == 0) { //caso 1
            resultado = "no one likes this"
        } else if (vector.length == 1) {
            resultado = vector[0] + " likes this";
        } else if (vector.length < 4) { //caso 2
            resultado = vector[0];
            for (let i = 1; i < vector.length; i++) {
                if (i == vector.length - 1) {
                    resultado += " and " + vector[i] + " like this"
                } else {
                    resultado += ", " + vector[i];
                }
            }
        } else { // caso 3
            resultado = vector[0] + ", " + vector[1];
            for (let i = 2; i < vector.length; i++) {
                if (i == vector.length - 1) {
                    resultado += " and " + (vector.length - 2) + " others like this";

                }
            }
        }
        return resultado
    }
    console.log(likes(vector));
}

function ej9() {

    var numero_mesas;
    var min = 0;
    var max = 4;
    var mesas = [];

    var flag_mesas = true;;
    do {
        numero_mesas = prompt('Introduzca número de mesas');

        if (numero_mesas > 0 && (numero_mesas != null || numero_mesas != "")) {
            flag_mesas = false;
        } else {
            alert("Introduce un valor correcto.");
        }
    } while (flag_mesas);


    for (let i = 0; i < numero_mesas; i++) {
        mesas[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var cadena;

    function imprimir() {
        cadena = mesas.join(' ');
        alert("Estado de las mesas: " + cadena);
    }

    imprimir();


    var numero_comensales;

    function operar() {
        numero_comensales = prompt('Introduzca número de personas para solicitar una mesa libre:');
        if (numero_comensales > 0 && numero_comensales <= 4 && (numero_comensales != null || numero_comensales != "")) {
            var indice;
            var flag = false;
            for (let i = 0; i < mesas.length; i++) {
                if (mesas[i] == 0) {
                    mesas[i] >= numero_comensales;
                    flag = true;
                    indice = i;
                    break;
                }
            }

            if (!flag) {
                alert("Lo sentimos no quedan mesas libres.");
            } else {
                alert("Se le ha asignado la mesa nº " + (indice + 1));
            }
            imprimir();
            operar();
        } else if ((numero_comensales == 0 || numero_comensales == null || numero_comensales == "") && numero_comensales <= 4) {
            operar();
        }


        else {
            if (numero_comensales > 4) {
                alert("Lo sentimos, no admitimos mesas de más de 4 personas.");
                operar();
            } else {
                alert("Hasta luego, vuelve pronto!");
                //return;
            }
        }
    }

    operar();
}