import './App.css';
import Nav from './components/Nav';
import PokemonTypes from './components/PokemonTypes';
import Serch from './components/Search';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='container'>
        <h2>Problema 2 item#1</h2>
        <PokemonTypes></PokemonTypes>
        <h2>Problema 2 item#3</h2>
        <Serch></Serch>
      </div>
    </div>
  );
}

export default App;
