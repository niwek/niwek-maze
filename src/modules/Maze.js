import React, { useState } from 'react';
import './Maze.scss';

function Maze() {
  const [range] = useState(5);
  const [minimum] = useState(5);
  const [width] = useState(Math.floor(Math.random() * range + minimum));
  const [length] = useState(Math.floor(Math.random() * range + minimum));
  const [maze] = useState(Array(width).fill(Array(length).fill(false)));
  const [startingX] = useState(Math.floor(Math.random() * range + minimum));
  const [startingY] = useState(Math.floor(Math.random() * range + minimum));

  function handleCell(x, y, value) {
    return (
      <div className="square">
        {value ? 'o' : 's'}
      </div>
    );
  }

  function handleRow(rowNumber, row) {
    return (
      <div className="row">
        {row.map((key, index) => handleCell(index, rowNumber, row[index]))}
      </div>
    );
  }

  // function drawPath(xStart, yStart, xEnd, yEnd) {
  //   // 0 = top, 1 = left, 2 = right, 3 = bottom
  //   const randomDirection = Math.floor(Math.random() * 4);
  //   if (randomDirection == 0) {

  //   } else if (randomDirection == 1) {

  //   }
  // }

  return (
    <div className="shopping-list">
      {maze.map((item, i) => handleRow(i, maze[i]))}
    </div>
  );
}

export default Maze;
