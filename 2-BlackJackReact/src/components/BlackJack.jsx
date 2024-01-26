import Card from "./Card"
import cards from "./CardImages"
import React from "react";
import { useState } from "react";
function BlackJack() {

    const [cardValue, setCardValue] = useState(null);

    const handlePedir = () => {
        const randomNumber = Math.floor(Math.random() * 48);
        setCardValue(randomNumber);
    }
    return (
        <div className="w-2/5 border-8 border-solid rounded-lg h-4/5 border-amber-950">
            <div className="flex flex-wrap justify-center w-full h-full p-5 bg-gray-600 bg-opacity-80">

                <div id="cartas-enemigo" className="flex w-4/5 gap-2" >
                </div>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <div id="cartas-enemigo" className="flex w-4/5 gap-2">
                    {/* Renderizar la carta directamente en JSX */}
                    {cardValue !== null && <Card img={cards[cardValue].img} value={cards[cardValue].valuee} />}
                </div>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>
                <p className="w-full text-center">buenas</p>

                <div className="flex justify-between w-3/5 mx-auto">
                    <button className="w-2/5 bg-gray-200 rounded-lg" onClick={handlePedir}>Pedir carta</button>
                    <button className="w-2/5 bg-gray-200 rounded-lg ">Plantarse</button>
                </div>

            </div>
        </div>
    )
}

export default BlackJack