import React, { useEffect } from 'react'
import "./social.css"
import {FaUser, FaLinkedin} from "react-icons/fa6"
const Social = () => {
  useEffect(()=>{
    const toggle = document.querySelector(".social .icon");
    const social = document.querySelector(".social");

    toggle.addEventListener("click",()=>{
      social.classList.toggle("active");
    })
  },[])
  return (
    <div className="social">
      <div className="icon"><FaUser /></div>
      <div className="links">
        <a href="https://www.linkedin.com/in/ihab-mahmoud-761341292" target="_blank" rel="noreferrer"><FaLinkedin/> IHAB MAHMOUD</a>
        <a href="https://www.linkedin.com/in/amera-elbassal-50b984272" target="_blank" rel="noreferrer"><FaLinkedin/> Amera Mahmoud</a>
      </div>
    </div>
  )
}

export default Social