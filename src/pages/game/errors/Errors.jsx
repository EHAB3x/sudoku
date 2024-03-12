import React, { useEffect } from 'react'
import heart from "../../../assets/heart.svg"
import Swal from 'sweetalert2';
import generateAndSolveSudoku from '../../../functions/generateAndSolveSudoku';
import { useNavigate } from 'react-router-dom';
const Errors = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const errors = document.querySelectorAll("#errors span img").length;
    const getDifficultyLevel = window.localStorage.getItem("difficulty");
    if (errors === 0) {
      Swal.fire({
        title: "Game Over!",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Play again",
        denyButtonText: "Go to home page"
      }).then((result) => {
        if (result.isConfirmed) {
          generateAndSolveSudoku(getDifficultyLevel);
        } else if (result.isDenied) {
          navigate("/")    
        }
      });
      
    }
  },[navigate])
  return (
    <h2 id="errors">
        <span><img src={heart} alt="heart" /></span>
        <span><img src={heart} alt="heart" /></span>
        <span><img src={heart} alt="heart" /></span>
    </h2>
  )
}

export default Errors