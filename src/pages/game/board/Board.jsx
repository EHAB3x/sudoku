import React from 'react'

const Board = ({board}) => {
  return (
    <div id="board">
      {board.map((row,indexI)=>(
        <div key={indexI} id={`row-${indexI}`}>
          {row.map((cell,indexJ)=>(
            <span 
              key={indexJ} 
              className={`number ${Math.floor(indexI / 3) % 2 === 1 && Math.floor(indexJ / 3) % 2 === 1 || Math.floor(indexI / 3) % 2 === 0 && Math.floor(indexJ / 3) % 2 === 0 ? "light" : ""}`} 
              data-order={indexI * 9 + indexJ}
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