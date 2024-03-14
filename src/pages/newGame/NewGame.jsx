import React from 'react'
import "./newGame.css"
import { Link } from 'react-router-dom'
import { IoChevronBack } from "react-icons/io5";
const NewGame = () => {
    const saveDifficulty = (difficulty)=>{
        window.localStorage.setItem("difficulty", difficulty);
    }
  return (
    <div className="newGame">
      <div className="back">
        <Link to="/">
          <IoChevronBack />
        </Link>
      </div>
      <Link className="link" to="/game" onClick={()=> saveDifficulty(.5)}>Easy</Link>
      <Link className="link" to="/game" onClick={()=> saveDifficulty(.7)}>Medium</Link>
      <Link className="link" to="/game" onClick={()=> saveDifficulty(1)}>Hard</Link>
    </div>
  )
}

export default NewGame