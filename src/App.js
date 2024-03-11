import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NewGame from './pages/newGame/NewGame';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/newGame' element={<NewGame />}/>
    </Routes>
  );
}

export default App;
