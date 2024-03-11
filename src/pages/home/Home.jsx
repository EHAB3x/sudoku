import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
        <Link to="/newGame" className="link">New Game</Link>
        <Link to="/highScores" className="link">High Scores</Link>
    </div>
  )
}

export default Home