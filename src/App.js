import logo from './logo.svg';
import './App.css';
import BackgroundComponent from './components/background';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <BackgroundComponent>
      <h1 className='bg-black'>Hello everyone

      </h1>
      </BackgroundComponent>
    </div>
  );
}

export default App;
