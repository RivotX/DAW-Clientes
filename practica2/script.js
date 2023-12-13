function alerthola() {
    alert("Hola");
}

function alertadios() {
    alert("Adios");
}

function prompteito() {
    nombre = prompt("Ingresa tu nombre de usuario: ");

    alert("Bienvenido a mi pagina " + nombre);
}

function calculadora() {
    var opcion = 0;

    while (opcion !== 5) {
        console.log("--------------------------------")
        console.log("---  Selecciona una acción   ---")
        console.log("---                          ---")
        console.log("--- 1. - Sumar               ---")
        console.log("--- 2. - Restar              ---")
        console.log("--- 3. - Multiplicar         ---")
        console.log("--- 4. - Dividir             ---")
        console.log("--- 5. - Salir               ---")
        console.log("---                          ---")
        console.log("--------------------------------")
        
        opcion = parseInt(prompt("Ingresa la operación que deseas realizar (1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: salir): "));

        if (opcion === 5) {
            console.log("Saliendo del programa.");
            break;
        }

        var numero1 = parseFloat(prompt("Ingresa el primer número: "));
        var numero2 = parseFloat(prompt("Ingresa el segundo número: "));

        if (opcion === 1) {
            var resultado = numero1 + numero2;
            console.log(numero1 + " + " + numero2 + " = " + resultado);
            alert("El resultado es: " + resultado);
        } else if (opcion === 2) {
            var resultado = numero1 - numero2;
            console.log(numero1 + " - " + numero2 + " = " + resultado);
            alert("El resultado es: " + resultado);
        } else if (opcion === 3) {
            var resultado = numero1 * numero2;
            console.log(numero1 + " * " + numero2 + " = " + resultado);
            alert("El resultado es: " + resultado);
        } else if (opcion === 4) {
            if (numero2 !== 0) {
                var resultado = numero1 / numero2;
                console.log(numero1 + " / " + numero2 + " = " + resultado);
                alert("El resultado es: " + resultado);
            } else {
                console.log("No se puede dividir por cero.");
                alert("No se puede dividir por cero.");
            }
        } else {
            console.log("Opción no válida. Por favor, elige una opción válida.");
        }

        var sino = prompt("¿Continuar? (S/N): ");
        
        if (sino.toLowerCase() !== "s") {
            console.log("Saliendo del programa.");
            break;
        }
    }
}
