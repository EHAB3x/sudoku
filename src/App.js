import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NewGame from './pages/newGame/NewGame';
import Game from './pages/game/Game';
import Social from './components/social/Social';
import HighScore from './pages/highScores/HighScore';

function App() {
  return (
    <>
    <Social />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/newGame' element={<NewGame />}/>
      <Route path='/game' element={<Game />}/>
      <Route path='/highScores' element={<HighScore />}/>
    </Routes>
    </>
  );
}

export default App;
