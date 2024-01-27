import Card from "./Card";
import cards from "./CardImages";
import { useState, useEffect } from "react";

const randomNumber1 = Math.floor(Math.random() * 48);
const randomNumberE = Math.floor(Math.random() * 48);
const randomNumber3 = Math.floor(Math.random() * 48);

function BlackJack({ onPerdidoChange, onGanadoChange, onEmpateChange }) {
    const [cartas, setCartas] = useState([{ img: cards[randomNumber1].img, value: cards[randomNumber1].valuee }]);
    const [cartasEnemigo, setcartasEnemigo] = useState([{ img: cards[randomNumberE].img, value: cards[randomNumberE].valuee }, { img: cards[48].img, value: cards[randomNumber3].valuee }]);
    const [contador, setcontador] = useState(cards[randomNumber1].valuee[0]);
    const [contadorEnemigo, setcontadorEnemigo] = useState(cards[randomNumberE].valuee[0]);
    const [perdido, setPerdido] = useState(false);
    const [ganado, setGanado] = useState(false);
    const [empate, setEmpate] = useState(false);
    const [isPlantado, setisPlantado] = useState(false);
    const [juegoFinalizado, setJuegoFinalizado] = useState(false);

    const handlePedir = () => {
        const randomNumber = Math.floor(Math.random() * 48);
        setCartas([...cartas, { img: cards[randomNumber].img, value: cards[randomNumber].valuee }]);
    };

    const handlePlantarse = () => {
        if (!isPlantado) {
            let nuevoContadorEnemigo = 0;

            // Calcular el contador del crupier
            cartasEnemigo.forEach((carta) => {
                let valorCarta = carta.value[0];
                if (carta.value.length > 1 && nuevoContadorEnemigo + 10 <= 21) {
                    valorCarta = carta.value[1];
                }
                nuevoContadorEnemigo += valorCarta;
            });

            setisPlantado(true);
            const nuevasCartasEnemigo = [...cartasEnemigo];
            nuevasCartasEnemigo[1] = { ...nuevasCartasEnemigo[1], img: cards[randomNumber3].img };
            setcartasEnemigo([...nuevasCartasEnemigo]);

            if (nuevoContadorEnemigo < 17 && nuevoContadorEnemigo !== 21) {
                while (nuevoContadorEnemigo < 17) {
                    const newRandomNumber = Math.floor(Math.random() * 48);
                    const nuevaCarta = { img: cards[newRandomNumber].img, value: cards[newRandomNumber].valuee };
                    nuevasCartasEnemigo.push(nuevaCarta);
                    nuevoContadorEnemigo = nuevasCartasEnemigo.reduce((total, carta) => total + parseInt(carta.value), 0);
                }
                setcartasEnemigo([...nuevasCartasEnemigo]);
            }
            // Marcar el juego como finalizado cuando el jugador se planta
            setJuegoFinalizado(true);
        }
    }

    //contador jugador
    useEffect(() => {
        let suma = 0;
        let tieneAs = false;

        cartas.forEach((carta) => {
            const valorCarta = carta.value.length > 1 ? carta.value[1] : carta.value[0];
            suma += valorCarta;

            if (carta.value.length > 1 && valorCarta === 11) {
                tieneAs = true;
            }
        });

        if (suma > 21 && tieneAs) {
            suma -= 10;
        }

        setcontador(suma);

        if (suma > 21) {
            setJuegoFinalizado(true);
            setPerdido(true);
            onPerdidoChange(true)
        }
    }, [cartas]);

    //contador groupier
    useEffect(() => {
        let suma = 0;
        let tieneAs_e = false;

        cartasEnemigo.forEach((carta) => {
            const valorCarta = carta.value.length > 1 ? carta.value[1] : carta.value[0];
            suma += valorCarta;

            if (carta.value.length > 1 && valorCarta === 11) {
                tieneAs_e = true;
            }
        });

        if (suma > 21 && tieneAs_e) {
            suma -= 10;
        }
        if (suma > 21) {
            setJuegoFinalizado(true);
            setGanado(true);
            onGanadoChange(true)
        }
        setcontadorEnemigo(suma);
    }, [cartasEnemigo]);

    //verificar ganador 
    useEffect(() => {
        let nuevoContador = 0;
        let nuevoContadorEnemigo = 0;
        let asesJugador = 0;
        let asesEnemigo = 0;

        // Calcular el contador del jugador
        cartas.forEach((carta) => {
            let valorCarta = carta.value[0];
            if (carta.value.length > 1) {
                asesJugador++;
            } else {
                nuevoContador += Number(valorCarta);
            }
        });

        // Manejar el valor de los ases del jugador
        for (let i = 0; i < asesJugador; i++) {
            if (nuevoContador + 11 <= 21) {
                nuevoContador += 11;
            } else {
                nuevoContador += 1;
            }
        }

        // Calcular el contador del crupier
        cartasEnemigo.forEach((carta) => {
            let valorCarta = carta.value[0];
            if (carta.value.length > 1) {
                asesEnemigo++;
            } else {
                nuevoContadorEnemigo += Number(valorCarta);
            }
        });

        // Manejar el valor de los ases del crupier
        for (let i = 0; i < asesEnemigo; i++) {
            if (nuevoContadorEnemigo + 11 <= 21) {
                nuevoContadorEnemigo += 11;
            } else {
                nuevoContadorEnemigo += 1;
            }
        }

        console.log("nuevoContadorEnemigo", nuevoContadorEnemigo);
        console.log("nuevoContador", nuevoContador);

        // Función para actualizar los estados
        const actualizarEstados = () => {
            if (nuevoContador > 21) {
                setGanado(false);
                setEmpate(false);
                setPerdido(true);

                console.log("Perdido: jugador pasó de 21");

            } else if (nuevoContadorEnemigo > 21) {
                setPerdido(false);
                setEmpate(false);
                setGanado(true);

                console.log("Ganado: crupier pasó de 21", "ganado", ganado, "perdido", perdido);

            } else if (nuevoContador < nuevoContadorEnemigo) {
                setGanado(false);
                setEmpate(false);
                setPerdido(true);
                console.log("Perdido: contador jugador menor que contador crupier", "ganado", ganado, "perdido", perdido);

            } else if (nuevoContador > nuevoContadorEnemigo) {
                setPerdido(false);
                setEmpate(false);
                setGanado(true);

                console.log("Ganado: contador jugador mayor que contador crupier");

            } else if (nuevoContador === nuevoContadorEnemigo) {
                setPerdido(false);
                setGanado(false);
                setEmpate(true);
                console.log("Empate: contadores iguales", "ganado", ganado, "perdido", perdido);

            }
        };

        actualizarEstados();
    }, [cartas, cartasEnemigo]); // Dependencias del useEffect

    useEffect(() => {
        // Verificar el ganador del juego y llamar a las funciones onChange correspondientes
        if (juegoFinalizado && perdido &&!ganado&&!empate) {
            onPerdidoChange(true);
        } else if (juegoFinalizado && ganado &&!perdido &&!empate) {
            onGanadoChange(true);
        } else if (juegoFinalizado && empate && !ganado&& !perdido) {
            onEmpateChange(true);
        }
    }, [juegoFinalizado, perdido, ganado, empate]);



    return (
        <div className="w-2/5 border-8 border-solid rounded-lg h-full border-amber-950">
            <div className="flex flex-wrap justify-center w-full h-full p-5 bg-gray-600 bg-opacity-80">
                <div className="flex w-full gap-2 justify-center">
                    {cartasEnemigo.map((carta, index) => (
                        <Card key={index} img={carta.img} value={carta.value} />
                    ))}
                </div>
                <div className="flex flex-wrap w-1/5 gap-10 py-2">
                    <p className="h-10 w-full bg-blue-600 rounded-md items-center text-black flex justify-center">
                        <span>{isPlantado && (contadorEnemigo)}</span>
                    </p>
                    <p className="h-10 w-full bg-red-400 rounded-md items-center text-black flex justify-center">
                        <span>{contador}</span>
                    </p>
                </div>
                <div className="flex w-full gap-2 justify-center">
                    {cartas.map((carta, index) => (
                        <Card key={index} img={carta.img} value={carta.value} />
                    ))}
                </div>
                <div className="flex justify-between w-3/5 mx-auto mt-4 rounded-md text-center items-center">
                    <button className="w-2/5 bg-gray-200 rounded-lg p-2" onClick={handlePedir}>
                        Pedir carta
                    </button>
                    <button className="w-2/5 bg-gray-200 rounded-lg p-2" onClick={handlePlantarse}>Plantarse</button>
                </div>
            </div>
        </div>
    );
}

export default BlackJack;
