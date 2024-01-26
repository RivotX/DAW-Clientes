import bg from './img/bg.png';
import BlackJack from './components/BlackJack';
export default function App() {

 
  return (
    <div className="min-h-screen p-5 bg-gray-800" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-3xl font-bold text-center text-white underline">
        BlackJack
      </h1>
      <div className='flex items-center justify-center min-h-full pt-5'>
        <BlackJack />
      </div>
    </div>
  );
}
