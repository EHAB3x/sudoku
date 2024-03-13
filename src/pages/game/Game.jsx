import React, { useEffect, useState } from 'react'
import "./game.css"
import Errors from './errors/Errors'
import Board from './board/Board'
import Digits from './digits/Digits'
import generateAndSolveSudoku from "../../functions/generateAndSolveSudoku"
import solveSudoku from '../../functions/solveSudoku'
import copyBoard from '../../functions/copyBoard'
const Game = () => {
    const [solvedPuzzle , setSolvedPuzzle] = useState([]);
    const [puzzle , setPuzzle] = useState([]);
    const [mistakes, setMistakes] = useState(3);

    const updateBoard = (board)=>{
      setPuzzle(board);
      console.log("Updated");
    }

    const mistakesSetter = (val)=>{
      setMistakes(val);
    }

    useEffect(()=>{
        const getDifficultyLevel = window.localStorage.getItem("difficulty");
        const puzz = generateAndSolveSudoku(getDifficultyLevel);
        setPuzzle(puzz);
        const puzzleCopy = copyBoard(puzz);
        const solvedPuzzle = solveSudoku(puzzleCopy);
        setSolvedPuzzle(solvedPuzzle);
    },[])
  return (
    <div className="game">
        <h1>Sudoku Game</h1>
        <Errors mistakes={mistakes}/>
        <Board board={puzzle} solved={solvedPuzzle} updateBoard={updateBoard} mistakesSetter={mistakesSetter}/>
        <Digits/>
    </div>
  )
}

export default Game