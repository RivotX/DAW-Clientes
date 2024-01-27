import bg from './img/bg.png';
import BlackJack from './components/BlackJack';
import { useState } from 'react';
import ModalResultado from "./components/ModalResultado";

import XD from './img/XD.png'
import clown from './img/clown.png'
import gigachad from './img/gigachad.png'
import gigachad2 from './img/gigachad2.png'
import pokerface from './img/._..png'


export default function App() {
  const [perdido, setPerdido] = useState(false);
  const [ganado, setGanado] = useState(false);
  const [empate, setEmpate] = useState(false);

  const handlePerdidoChange = (nuevoEstado) => {
    setTimeout(() => {
      setPerdido(nuevoEstado);

    }, 500);
  };
  const handleGanadoChange = (nuevoEstado) => {
    setTimeout(() => {
      setGanado(nuevoEstado);

    }, 500);
  };
  const handleEmpateChange = (nuevoEstado) => {
    setTimeout(() => {
      setEmpate(nuevoEstado);

    }, 500);
  };




  return (
    <div className=" min-h-screen p-5 bg-gray-800" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-3xl font-bold text-center text-white underline">
        BlackJack
      </h1>

      <div className='flex items-center justify-center min-h-full pt-5'>
        <BlackJack onPerdidoChange={handlePerdidoChange} onGanadoChange={handleGanadoChange} onEmpateChange={handleEmpateChange}/>
      </div>
      {/* Renderizar Modal has perdido*/}
      {perdido && (
        <ModalResultado texto={"🤣🤡XDD Has perdido XDXD🤡🤣"} img={clown} img2={XD} img3={XD} img4={clown}/>
      )}
      {/* Renderizar Modal has ganado*/}
      {ganado && (
        <ModalResultado texto={"🗿You won, easy game🗿"} img={gigachad} img2={gigachad2} img3={gigachad2} img4={gigachad}/>
      )}
      {/* Renderizar Modal has ganado*/}
      {empate && (
        <ModalResultado texto={"empate"} img={pokerface} img2={pokerface} img3={pokerface} img4={pokerface}/>
      )}
      
    </div>


  );
}
