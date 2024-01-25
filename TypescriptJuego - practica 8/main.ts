import * as readlineSync from "readline-sync";
import { Jugador } from "./Classes/Jugador";
import { Enemigo } from "./Classes/Enemigo";

function main() {
  function mostrarItems() {
    console.log(
      "Tienes ",
      jugador.getDinero(),
      "\n1. Palo de madera (+2 ataque) (2 de oro)\n2.Daga (+4 ataque) (4 de oro)\n3.Bazooka(+10 ataque) (10 de oro)\n 4. Pocion de vida (5 de oro) (+3 de vida)"
    );
    let opsion: number = parseInt(readlineSync.question("elige una opcion"));
    switch (opsion) {
      case 1:
        if (jugador.getDinero() - 4 < 0) {
          console.log("no tienes suficiente dinero para comprar ese item");
        } else {
          jugador.setDinero(jugador.getDinero() - 2);
          jugador.setPuntos_ataque(jugador.getPuntos_ataque() + 2);
          console.log(
            "Has comprado: Palo de madera, tu fuerza actual es:",
            jugador.getPuntos_ataque(),
            "te queda:",
            jugador.getDinero(),
            "de oro"
          );
        }
        break;
      case 2:
        if (jugador.getDinero() - 4 < 0) {
          console.log("no tienes suficiente dinero para comprar ese item");
        } else {
          jugador.setDinero(jugador.getDinero() - 4);
          jugador.setPuntos_ataque(jugador.getPuntos_ataque() + 4);
          console.log(
            "Has comprado: Daga, tu fuerza actual es:",
            jugador.getPuntos_ataque(),
            "te queda:",
            jugador.getDinero(),
            "de oro"
          );
        }
        break;
      case 3:
        if (jugador.getDinero() - 10 < 0) {
          console.log("no tienes suficiente dinero para comprar ese item");
        } else {
          jugador.setDinero(jugador.getDinero() - 10);
          jugador.setPuntos_ataque(jugador.getPuntos_ataque() + 10);
          console.log(
            "Has comprado: Bazooka, tu fuerza actual es:",
            jugador.getPuntos_ataque(),
            "te queda:",
            jugador.getDinero(),
            "de oro"
          );
        }

        break;
      case 4:
        if (jugador.getDinero() - 5 < 0) {
          console.log("no tienes suficiente dinero para comprar ese item");
        } else {
          jugador.setDinero(jugador.getDinero() - 5);
          jugador.setPuntos_salud(jugador.getPuntos_salud() + 3);
          console.log(
            "Te has curado 3 de vida, tu salud actual es",
            jugador.getPuntos_salud(),
            "te queda:",
            jugador.getDinero(),
            "de oro"
          );
        }

        break;
    }
  }
  let enemigos: string[] = [
    "Xx_SorceressEvelynn_xX",
    "GigaIsaac",
    "Th3_J4V1_PRO",
    "PastPerfect",
    "CriptoSister",
  ];

  console.log(
    "Introduccion: Vas a luchar contra profesores del medac para covnertirte en el rey del meda"
  );

  let nombreJugador: string = readlineSync.question("Nombre de tu personaje: ");
  const jugador = new Jugador(nombreJugador);
  jugador.calcularFuerza();
  console.log("tu fuerza inicial es: ", jugador.getPuntos_ataque());
  let input: string = readlineSync.question(
    "Pulsa S si quieres calcular de nuevo tu fuerza(1 de oro) "
  );
  if (input == "S" || input == "s") {
    jugador.calcularFuerza();
    jugador.setDinero(jugador.getDinero() - 1);
    console.log(
      "tu nueva fuerza inicial es:",
      jugador.getPuntos_ataque(),
      ",tienes:",
      jugador.getDinero(),
      "de oro"
    );
  }

  let opcion: number;
  let perdido: boolean = false;
  do {
    console.log("Que deseas hacer? ");

    console.log("1. Luchar contra un enemigo ");
    console.log("2. Comprar items ");
    console.log("3. Consutlar estadisticas");
    console.log("4. Salir del juego");

    opcion = parseInt(readlineSync.question(), 10);

    switch (opcion) {
      case 1:
        let enemigoSeleccionado = enemigos[Math.floor(Math.random() * 5)];
        let enemigo = new Enemigo(enemigoSeleccionado);
        enemigo.calcularFuerza();
        console.log(enemigo.tostring());
        let opcion2: number = readlineSync.question(
          "Pulsa 1 para luchar\nPulsa 2 para huir (2 de oro)"
        );

        if (opcion2 == 2) {
          jugador.setDinero(jugador.getDinero() - 2);
          console.log("huiste sin problema");
        } else {
          if (jugador.getPuntos_ataque() > enemigo.getPuntos_ataque()) {
            jugador.setDinero(
              jugador.getDinero() + (Math.floor(Math.random() * 4) + 1)
            );
            console.log("Ganaste");
          } else {
            jugador.setPuntos_salud(
              jugador.getPuntos_salud() -
                (enemigo.getPuntos_ataque() - jugador.getPuntos_ataque())
            );
            console.log(
              "Has perdido el combate, te quedan",
              jugador.getPuntos_salud(),
              "puntos de salud"
            );
          }
        }
        break;
      case 2:
        mostrarItems();
        break;
      case 3:
        console.log(jugador.tostring());
        break;
      case 4:
        console.log("Salir del juego");
        break;
      default:
        console.log("Opción no reconocida");
    }
    if (jugador.getPuntos_salud() <= 0) {
      console.log("Te han expulsado del medac, has perdido el juego");
      perdido = true;
    }
    if (perdido) {
      opcion = 4;
    }
  } while (opcion != 4);
}

main();
