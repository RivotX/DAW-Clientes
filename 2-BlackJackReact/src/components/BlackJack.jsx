import Card from "./Card";
import cards from "./CardImages";
import { useState, useEffect } from "react";

function BlackJack({ onPerdidoChange }) {
    const randomNumber1 = Math.floor(Math.random() * 48);
    const randomNumber2 = Math.floor(Math.random() * 48);

    const [contador, setcontador] = useState(cards[randomNumber1].valuee[0]);
    const [contadorEnemigo, setcontadorEnemigo] = useState(cards[randomNumber2].valuee[0]);

    const [cartas, setCartas] = useState([{ img: cards[randomNumber1].img, value: cards[randomNumber1].valuee }]);
    const [cartasEnemigo, setcartasEnemigo] = useState([{ img: cards[randomNumber2].img, value: cards[randomNumber2].valuee }]);

    const [perdido, setPerdido] = useState(false);

    const handlePedir = () => {
        const randomNumber = Math.floor(Math.random() * 48);
        const randomNumber2 = Math.floor(Math.random() * 48);

        setCartas([...cartas, { img: cards[randomNumber].img, value: cards[randomNumber].valuee }]);
        setcartasEnemigo([...cartas, { img: cards[randomNumber2].img, value: cards[randomNumber2].valuee }]);

    };


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
        <div className="w-2/5 border-8 border-solid rounded-lg h-5/6 border-amber-950">
            <div className="flex flex-wrap justify-center w-full h-full p-5 bg-gray-600 bg-opacity-80">

                <div className="flex w-full gap-2 justify-center">
                    {/* Renderizar cartas enemigo*/}
                    {cartasEnemigo.map((carta, index) => (
                        <Card key={index} img={carta.img} value={carta.value} />
                    ))}
                </div>
                <div className="flex flex-wrap w-1/5 gap-3">
                    <p className="h-10 w-full bg-blue-600 rounded-md items-center text-black flex justify-center">
                        <span>{contadorEnemigo}</span>
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
                <div className="flex justify-between w-3/5 mx-auto mt-2 rounded-md text-center items-center">
                    <button className="w-2/5 bg-gray-200 rounded-lg" onClick={handlePedir}>
                        Pedir carta
                    </button>
                    <button className="w-2/5 bg-gray-200 rounded-lg">Plantarse</button>
                </div>
            </div>


        </div>
    );
}

export default BlackJack;
