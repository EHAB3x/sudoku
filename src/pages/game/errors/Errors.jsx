import React, { useEffect, useState } from 'react';
import heart from "../../../assets/heart.svg";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Errors = ({mistakes}) => {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (seconds === 59) {
            setSeconds(0);
            setMinutes(prevMinutes => prevMinutes + 1);
        } else {
            setSeconds(prevSeconds => prevSeconds + 1);
        }
    }, 1000);

    // Cleanup the interval to prevent memory leaks
    return () => clearInterval(interval);
}, [seconds]); // Add seconds as a dependency


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
    <>
      <h2 id="errors">
          <span><img src={heart} alt="heart" /></span>
          <span><img src={heart} alt="heart" /></span>
          <span><img src={heart} alt="heart" /></span>
      </h2>

      <div  className="time">
        <span>{`${minutes< 10 ?`0${minutes}`:minutes} : ${seconds < 10 ?`0${seconds}`:seconds}`}</span>
      </div>
    </>
  )
}

export default Errors