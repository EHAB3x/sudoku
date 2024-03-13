import React, { useEffect } from 'react';
import heart from "../../../assets/heart.svg";
import { useNavigate } from 'react-router-dom';
const Errors = () => {
  return (
    <h2 id="errors">
        <span><img src={heart} alt="heart" /></span>
        <span><img src={heart} alt="heart" /></span>
        <span><img src={heart} alt="heart" /></span>
    </h2>
  )
}

export default Errors