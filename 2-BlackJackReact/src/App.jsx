import bg from './img/bg.png';
import BlackJack from './components/BlackJack';
import { useState } from 'react';
import HasperdidoModal from "./components/HasPerdidoModal";
import HasGanadoModal from "./components/HasGanadoModal";
import EmpateModal from "./components/EmpateModal";

export default function App() {
  const [perdido, setPerdido] = useState(false);
  const [ganado, setGanado] = useState(false);
  const [empate, setEmpate] = useState(false);

  const handlePerdidoChange = (nuevoEstado) => {
    setTimeout(() => {
      setPerdido(nuevoEstado);
      console.log(nuevoEstado);

    }, 500);
  };
  const handleGanadoChange = (nuevoEstado) => {
    setTimeout(() => {
      setGanado(nuevoEstado);
      console.log(nuevoEstado);

    }, 500);
  };
  const handleEmpateChange = (nuevoEstado) => {
    setTimeout(() => {
      setEmpate(nuevoEstado);
      console.log(nuevoEstado);

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
        <HasperdidoModal />
      )}
      {/* Renderizar Modal has ganado*/}
      {ganado && (
        <HasGanadoModal />
      )}
      {/* Renderizar Modal has ganado*/}
      {empate && (
        <EmpateModal />
      )}
      
    </div>


  );
}
