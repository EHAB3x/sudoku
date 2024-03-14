import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Board = ({board, solved, updateBoard, mistakesSetter}) => {
  const [isSolved, setIsSolved] = useState(false);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (!isSolved) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const nextSeconds = prevTime.seconds + 1;
          const nextMinutes = prevTime.minutes + Math.floor(nextSeconds / 60);
          return {
            minutes: nextMinutes,
            seconds: nextSeconds % 60,
          };
        });
      }, 1000);
    }else{
      const difficulty = window.localStorage.getItem("difficulty");
      if (isSolved && difficulty === "0.5") {
        const timeStr = `${time.minutes < 10 ? '0' + time.minutes : time.minutes}:${time.seconds < 10 ? '0' + time.seconds : time.seconds}`;
        const newScore = { time: timeStr };
        
        let easyHighScores = JSON.parse(window.localStorage.getItem("easyHighScores")) || [];
        easyHighScores.push(newScore);
        easyHighScores.sort((a, b) => {
          const [aMinutes, aSeconds] = a.time.split(':').map(Number);
          const [bMinutes, bSeconds] = b.time.split(':').map(Number);
          return (aMinutes * 60 + aSeconds) - (bMinutes * 60 + bSeconds);
        });
        easyHighScores = easyHighScores.slice(0, 5); // Keep only top 5 scores

        window.localStorage.setItem("easyHighScores", JSON.stringify(easyHighScores));
      }else if(isSolved && difficulty === "0.7"){
        const timeStr = `${time.minutes < 10 ? '0' + time.minutes : time.minutes}:${time.seconds < 10 ? '0' + time.seconds : time.seconds}`;
        const newScore = { time: timeStr };
        
        let mediumHighScores = JSON.parse(window.localStorage.getItem("mediumHighScores")) || [];
        mediumHighScores.push(newScore);
        mediumHighScores.sort((a, b) => {
          const [aMinutes, aSeconds] = a.time.split(':').map(Number);
          const [bMinutes, bSeconds] = b.time.split(':').map(Number);
          return (aMinutes * 60 + aSeconds) - (bMinutes * 60 + bSeconds);
        });
        mediumHighScores = mediumHighScores.slice(0, 5); // Keep only top 5 scores

        window.localStorage.setItem("mediumHighScores", JSON.stringify(mediumHighScores));
      }else if(isSolved && difficulty === "1"){
        const timeStr = `${time.minutes < 10 ? '0' + time.minutes : time.minutes}:${time.seconds < 10 ? '0' + time.seconds : time.seconds}`;
        const newScore = { time: timeStr };
        
        let hardHighScores = JSON.parse(window.localStorage.getItem("hardHighScores")) || [];
        hardHighScores.push(newScore);
        hardHighScores.sort((a, b) => {
          const [aMinutes, aSeconds] = a.time.split(':').map(Number);
          const [bMinutes, bSeconds] = b.time.split(':').map(Number);
          return (aMinutes * 60 + aSeconds) - (bMinutes * 60 + bSeconds);
        });
        hardHighScores = hardHighScores.slice(0, 5); // Keep only top 5 scores

        window.localStorage.setItem("hardHighScores", JSON.stringify(hardHighScores));
      }

      Swal.fire({
        title: "Congratulations",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "ChangeLevel",
        denyButtonText: "Home"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/newGame")
        } else if (result.isDenied) {
          navigate("/")
        }
      });
    }
  
    return () => {
      clearInterval(interval)
    }; // Cleanup interval on unmount or when isSolved becomes true
  }, [isSolved, time]); // Run when isSolved changes
  

useEffect(() => {
  if (board.length > 0 && solved.length > 0) {
    let solvedCorrectly = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== solved[i][j]) {
          solvedCorrectly = false;
          break;
        }
      }
      if (!solvedCorrectly) break; 
    }
    setIsSolved(solvedCorrectly);
  }

  }, [board, solved]);




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
    <>
      <div  className="time">
        <span>{`${time.minutes < 10 ? `0${time.minutes}` : time.minutes} : ${time.seconds < 10 ? `0${time.seconds}` : time.seconds}`}</span>
      </div>
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
    </>
  )
}

export default Board