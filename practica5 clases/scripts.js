class Tutor {
    constructor(nombre, edad, dni, titulo) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.titulo = titulo;
    }
    mostrar() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Título: ${this.titulo}`;
    }
    setName(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

class Asignatura {
    constructor(nombre, curso, horasTotales) {
        this.nombre = nombre;
        this.curso = curso;
        this.horasTotales = horasTotales;
    }
    mostrar() {
        return `<br>[ Nombre: ${this.nombre}, Curso: ${this.curso}, Horas Totales: ${this.horasTotales}] <br>`;
    }
    setHoras(nuevaHoras) {
        this.horasTotales = nuevaHoras;
    }
}

class Alumno {
    constructor(nombre, edad, ciclo, curso, tutor, listaAsignaturas, listaNotaMedia) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciclo = ciclo;
        this.curso = curso;
        this.tutor = tutor;
        this.listaAsignaturas = listaAsignaturas;
        this.listaNotaMedia = listaNotaMedia;
    }
    calcularMedia() {
        let suma = 0;
        for (let i = 0; i < this.listaNotaMedia.length; i++) {
            suma += this.listaNotaMedia[i].nota / this.listaNotaMedia.length;

        }
        return suma;
    }
    MediaAsignatura() {
        let resultado = "";
        for (let i = 0; i < this.listaNotaMedia.length; i++) {
            resultado += `${this.listaNotaMedia[i].asignatura}: ${this.listaNotaMedia[i].nota}\n`;
        }
        return resultado;
    }
    mostrar() {
        let resultado;
        for (let i = 0; i < this.listaAsignaturas.length; i++) {

            resultado += `${this.listaAsignaturas[i].mostrar()}`

        }

        return ` nombre: ${this.nombre}<br>edad ${this.edad}<br>ciclo ${this.ciclo}<br>curso: ${this.curso}<br>tutor [${this.tutor.mostrar()}] <br><br>listaAsignaturas: <br>${resultado}<br><br>listaNotaMedia: <br>${this.MediaAsignatura()}<br><br>notaMedia: ${this.calcularMedia()} `
    }
}

const Toni = new Tutor("toni", 89, '12345678Y', 'Ingenieria informatica');
const Makako = new Tutor('Makako', 19, '9232134D', 'sin estudios')



const Programacion = new Asignatura('Programacion', 1, 180);
const BasesDeDatos = new Asignatura('BasesDeDatos', 1, 175);
const EntornoServidor = new Asignatura('EntornoServidor', 2, 190);
const EntornoCliente = new Asignatura('EntornoCliente', 2, 140);
const CosasDeMoviles = new Asignatura('CosasDeMoviles', 3, 150);
const AndroidStudio = new Asignatura('AndroidStudio', 5, 123);


let listaAsignaturasDAW = [Programacion, BasesDeDatos, EntornoServidor, EntornoCliente]

let listaAsignaturasDAM = [BasesDeDatos, AndroidStudio, EntornoCliente, CosasDeMoviles]




let notas1 = {
    'Programacion': 4.86,
    'BasesDeDatos': 5.3,
    'EntornoServidor': 4.95,
    'EntornoCliente': 4.1
};

let notas2 = {
    'Programacion': 8,
    'BasesDeDatos': 1.3,
    'EntornoServidor': 3.95,
    'EntornoCliente': 10
};

let listaNotasJosue = [];
let listaNotasAle = [];


for (let asignatura in notas1) {
    listaNotasJosue.push({ 'asignatura': asignatura, 'nota': notas1[asignatura] });
}

for (let asignatura in notas2) {
    listaNotasAle.push({ 'asignatura': asignatura, 'nota': notas2[asignatura] });
}

var Josua = new Alumno("Josua", 21, 'DAW', 2, Toni, listaAsignaturasDAW, listaNotasJosue);

var Ale = new Alumno("Ale", 14, 'DAM', 1, Makako, listaAsignaturasDAM, listaNotasAle);

let filaSeleccionada;
function seleccionar(element) {
    filaSeleccionada = element;
    const boton = document.getElementById('botoninfo');
    let nombre = element.querySelector('.nombre').textContent;
    boton.innerHTML = 'Informacion de ' + nombre + ".";

    nombreObjeto = filaSeleccionada.querySelector('.nombre').textContent;
    objeto = window[nombreObjeto];

    if (div.innerHTML != objeto.mostrar()) {
        div.innerHTML = objeto.mostrar();
    }
}
let div;
let nombreObjeto
let objeto
function mostrarInfo() {
    nombreObjeto = filaSeleccionada.querySelector('.nombre').textContent;

    div = document.getElementById('div');
    objeto = window[nombreObjeto];

    console.log(objeto);

    div.style.display = 'block';
    div.innerHTML = objeto.mostrar();

    console.log(div.style.display)

    // Agregar el div al cuerpo del documento
}
// if (filaSeleccionada) {
//     const celdas = filaSeleccionada.getElementsByTagName('td');

//     for (let i = 0; i < celdas.length; i++) {
//         const contenidoCelda = celdas[i].textContent;
//         console.log(`Contenido de la celda ${i + 1}: ${contenidoCelda}`);
//     }

// } else {
//     console.log('Ninguna fila seleccionada.');
// } 