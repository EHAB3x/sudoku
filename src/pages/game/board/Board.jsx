import React from 'react'
import Swal from 'sweetalert2';
import Digits from '../digits/Digits';
import generateAndSolveSudoku from '../../../functions/generateAndSolveSudoku';
import { useNavigate } from 'react-router-dom';

const Board = ({board, solved, updateBoard, mistakesSetter}) => {
  const navigate = useNavigate();
  const getDifficultyLevel = window.localStorage.getItem("difficulty");
  const checkAnswer = (cell,i,j)=>{
    let activeDigit = document.querySelector("#digits .active");
    if (!activeDigit) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "Please choose number first"
      });
    }else{
      if (cell !== 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "info",
          title: "This cell already entered"
        });
      }else if (activeDigit.innerHTML == solved[i][j]) {
        const updatedBoard = [...board];
        updatedBoard[i][j] = solved[i][j];
        updateBoard(updatedBoard);
      }else{
        let errors = document.querySelector("#errors");
        let heartSpan = document.querySelectorAll("#errors span");
        mistakesSetter(heartSpan.length - 1)
        errors.removeChild(heartSpan[heartSpan.length - 1]);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
          icon: "error",
          title: "Wrong number"
        });
  }
}
  }
  return (
    <div id="board">
      {board.map((row,indexI)=>(
        <div key={indexI} className={`row row-${indexI}`}>
          {row.map((cell,indexJ)=>(
            <span 
              key={indexJ} 
              className={`number ${Math.floor(indexI / 3) % 2 === 1 && Math.floor(indexJ / 3) % 2 === 1 || Math.floor(indexI / 3) % 2 === 0 && Math.floor(indexJ / 3) % 2 === 0 ? "light" : ""}`} 
              data-order={indexI * 9 + indexJ}
              onClick={()=> checkAnswer(cell, indexI, indexJ)}
            >
              {cell === 0 ? "" : cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board