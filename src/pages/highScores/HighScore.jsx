import React, { useEffect, useState } from 'react'
import { IoChevronBack } from "react-icons/io5";
import "./highScore.css"
import { Link } from 'react-router-dom';
const HighScore = () => {
  const [easyHighScores, setEasyHighScores] = useState([]);
  const [mediumHighScores, setMediumHighScores] = useState([]);
  const [hardHighScores, setHardHighScores] = useState([]);

  const easy = JSON.parse(window.localStorage.getItem("easyHighScores"))
  const medium = window.localStorage.getItem("mediumHighScores")
  const hard = window.localStorage.getItem("hardHighScores")
  useEffect(()=>{
    setEasyHighScores(easy);
    setMediumHighScores(medium);
    setHardHighScores(hard);
  },[])

  return (
    <div className="highScores">
      <div className="back">
        <Link to="/">
          <IoChevronBack />
        </Link>
      </div>
      <div className="easy">
        <h2>Easy</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Minutes</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            {easyHighScores === null 
              ?(
                <tr>
                  <td colSpan="3">There is no high scores yet</td>
                </tr>
              )
              :easyHighScores.map((_, index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{easyHighScores[index].time.split(":")[0]}</td>
                  <td>{easyHighScores[index].time.split(":")[1]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className="medium">
        <h2>Medium</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Minutes</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            {mediumHighScores === null 
              ?(
                <tr>
                  <td colSpan="3">There is no high scores yet</td>
                </tr>
              )
              :mediumHighScores.map((_, index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{mediumHighScores[index].time.split(":")[0]}</td>
                  <td>{mediumHighScores[index].time.split(":")[1]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className="hard">
        <h2>Hard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Minutes</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            {hardHighScores === null 
              ?(
                <tr>
                  <td colSpan="3">There is no high scores yet</td>
                </tr>
              )
              :hardHighScores.map((_, index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hardHighScores[index].time.split(":")[0]}</td>
                  <td>{hardHighScores[index].time.split(":")[1]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HighScore