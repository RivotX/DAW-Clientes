import Card from "./Card";
import cards from "./CardImages";
import { useState, useEffect } from "react";

function BlackJack() {
    const randomNumber1 = Math.floor(Math.random() * 48);
    const [contador, setcontador] = useState(0);
    const [cartas, setCartas] = useState([{ img: cards[randomNumber1].img, value: cards[randomNumber1].valuee }]);

    const handlePedir = () => {
        const randomNumber = Math.floor(Math.random() * 48);

        setCartas([...cartas, { img: cards[randomNumber].img, value: cards[randomNumber].valuee }]); 

    };

    useEffect(() => {
        let suma = 0;

        cartas.forEach(carta => {
            suma = suma + carta.value;
        });

        setcontador(suma);

        // El código dentro de este bloque se ejecutará después de actualizar el estado
        console.log(suma);
    }, [cartas]);

    return (
        <div className="w-2/5 border-8 border-solid rounded-lg h-4/5 border-amber-950">
            <div className="flex flex-wrap justify-center w-full h-full p-5 bg-gray-600 bg-opacity-80">
                <p className="h-10 w-28 bg-red-400 text-black">
                    <span>{contador}</span>
                </p>
                <div className="flex w-4/5 gap-2">
                    {/* Renderizar cartas Jugador*/}
                    {cartas.map((carta, index) => (
                        <Card key={index} img={carta.img} value={carta.value} />
                    ))}
                </div>
                <div className="flex justify-between w-3/5 mx-auto">
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
