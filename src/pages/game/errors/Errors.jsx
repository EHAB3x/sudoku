import React, { useEffect, useState } from 'react';
import heart from "../../../assets/heart.svg";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Errors = ({mistakes}) => {


  const navigate = useNavigate();
  if (mistakes === 0) {
    Swal.fire({
      title: "Game Over!",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Change Level",
      denyButtonText: `Home`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/newGame")
      } else if (result.isDenied) {
        navigate("/")
      }
    });
  }
  return (
      <h2 id="errors">
          <span><img src={heart} alt="heart" /></span>
          <span><img src={heart} alt="heart" /></span>
          <span><img src={heart} alt="heart" /></span>
      </h2>
  )
}

export default Errors