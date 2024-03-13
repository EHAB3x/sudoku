import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NewGame from './pages/newGame/NewGame';
import Game from './pages/game/Game';
import Social from './components/social/Social';

function App() {
  return (
    <>
    <Social />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/newGame' element={<NewGame />}/>
      <Route path='/game' element={<Game />}/>
    </Routes>
    </>
  );
}

export default App;
