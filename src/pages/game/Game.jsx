import React from 'react'
import "./game.css"
import Errors from './errors/Errors'
import Board from './board/Board'

const Game = () => {
  return (
    <div className="game">
        <h1>Sudoku Game</h1>
        <Errors />
        <Board />
        
    </div>
  )
}

export default Game