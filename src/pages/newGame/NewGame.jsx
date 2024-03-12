import React from 'react'
import "./newGame.css"
import { Link } from 'react-router-dom'
const NewGame = () => {
    const saveDifficulty = (difficulty)=>{
        window.localStorage.setItem("difficulty", difficulty);
    }
  return (
    <div className="newGame">
        <Link className="link" to="/game" onClick={()=> saveDifficulty(.5)}>Easy</Link>
        <Link className="link" to="/game" onClick={()=> saveDifficulty(.7)}>Medium</Link>
        <Link className="link" to="/game" onClick={()=> saveDifficulty(1)}>Hard</Link>
    </div>
  )
}

export default NewGame