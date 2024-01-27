import Card from "./Card";
import cards from "./CardImages";
import { useState, useEffect } from "react";
const randomNumber1 = Math.floor(Math.random() * 48);
const randomNumberE = Math.floor(Math.random() * 48);
const randomNumber3 = Math.floor(Math.random() * 48);
function BlackJack({ onPerdidoChange }) {


    const [cartas, setCartas] = useState([{ img: cards[randomNumber1].img, value: cards[randomNumber1].valuee }]);
    const [cartasEnemigo, setcartasEnemigo] = useState([{ img: cards[randomNumberE].img, value: cards[randomNumberE].valuee }, { img: cards[48].img, value: cards[randomNumber3].valuee }]);

    const [contador, setcontador] = useState(cards[randomNumber1].valuee[0]);
    const [contadorEnemigo, setcontadorEnemigo] = useState(cards[randomNumberE].valuee[0]);

    const [perdido, setPerdido] = useState(false);
    const [ganado, setGanado] = useState(false);
    const [isPlantado, setisPlantado] = useState(false);

    const handlePedir = () => {

        const randomNumber = Math.floor(Math.random() * 48);

        setCartas([...cartas, { img: cards[randomNumber].img, value: cards[randomNumber].valuee }]);

    };

    const handlePlantarse = () => {
        if (!isPlantado) {
            setisPlantado(true)
            //desvelar carta en negro
            const nuevasCartasEnemigo = [...cartasEnemigo];

            nuevasCartasEnemigo[1] = { ...nuevasCartasEnemigo[1], img: cards[randomNumber3].img };
            setcartasEnemigo([...nuevasCartasEnemigo]);



            let nuevoContadorEnemigo = nuevasCartasEnemigo.reduce((total, carta) => total + parseInt(carta.value), 0);

            if (nuevoContadorEnemigo < 17 && nuevoContadorEnemigo !== 21) {

                // Generar nuevas cartas enemigas mientras el contador sea menor que 17
                while (nuevoContadorEnemigo < 17) {
                    const newRandomNumber = Math.floor(Math.random() * 48);

                    const nuevaCarta = { img: cards[newRandomNumber].img, value: cards[newRandomNumber].valuee }; // Crear nueva carta

                    nuevasCartasEnemigo.push(nuevaCarta);

                    //hacemos la suma del contador en esa variable para saber si seguir o no entrando al while sin actualizar contadorenemigo estado (porque es asincrono)
                    nuevoContadorEnemigo = nuevasCartasEnemigo.reduce((total, carta) => total + parseInt(carta.value), 0);
                }
                // Actualizar el estado de cartasEnemigo con las nuevas cartas
                setcartasEnemigo([...nuevasCartasEnemigo]);
            }

            //esto hay que conseguir hacerlo una vez este calculado
            if(contador < nuevoContadorEnemigo){
                setPerdido(true)
            }else{
                setGanado(true)
            }
            console.log(ganado)
            console.log("perdido",perdido)

        }
    }



    useEffect(() => {
        let suma = 0;
        let tieneAs_e = false;

        cartasEnemigo.forEach((carta) => {
            const valorCarta = carta.value.length > 1 ? carta.value[1] : carta.value[0];
            suma += valorCarta;

            // es un as?
            if (carta.value.length > 1 && valorCarta === 11) {
                tieneAs_e = true;
            }
        });

        if (suma > 21 && tieneAs_e) {
            suma -= 10;
        }

        setcontadorEnemigo(suma);
    }, [cartasEnemigo]);

    useEffect(() => {
        let suma = 0;
        let tieneAs = false;

        cartas.forEach((carta) => {
            const valorCarta = carta.value.length > 1 ? carta.value[1] : carta.value[0];
            suma += valorCarta;

            // es un as?
            if (carta.value.length > 1 && valorCarta === 11) {
                tieneAs = true;
            }
        });

        if (suma > 21 && tieneAs) {
            suma -= 10;
        }

        setcontador(suma);

        if (suma > 21) {
            setPerdido(true);
            onPerdidoChange(true);
            console.log("perdiste");
        }
    }, [cartas]);


    return (
        <div className="w-2/5 border-8 border-solid rounded-lg h-full border-amber-950">
            <div className="flex flex-wrap justify-center w-full h-full p-5 bg-gray-600 bg-opacity-80">

                <div className="flex w-full gap-2 justify-center">
                    {/* Renderizar cartas enemigo*/}
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
                    {/* Renderizar cartas Jugador*/}
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
