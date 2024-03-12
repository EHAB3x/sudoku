import React, { useEffect, useState } from 'react'
import "./game.css"
import Errors from './errors/Errors'
import Board from './board/Board'
import generateAndSolveSudoku from "../../functions/generateAndSolveSudoku"
import printBoard from "../../functions/printBoard"
import Digits from './digits/Digits'
import generateEmptyBoard from '../../functions/generateEmptyBoard'
const Game = () => {
    const [emptyBoard , setEmptyBoard] = useState([]);
    const [puzzle , setPuzzle] = useState([]);
    useEffect(()=>{
        const getDifficultyLevel = window.localStorage.getItem("difficulty");
        const empty = generateEmptyBoard();
        setEmptyBoard(empty);
        const puzz = generateAndSolveSudoku(getDifficultyLevel);
        setPuzzle(puzz);
    },[])
  return (
    <div className="game">
        <h1>Sudoku Game</h1>
        <Errors />
        <Board board={puzzle}/>
        <Digits/>
    </div>
  )
}

export default Game