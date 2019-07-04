import React, { useState } from 'react';
import Row from './Row';

function Maze() {
  const [x] = useState(Math.floor(Math.random() * 5 + 5));
  const [y] = useState(Math.floor(Math.random() * 5 + 5));
  const [maze] = useState(Array(x).fill(Array(y).fill(null)));

  function handleRow(rowNumber, row) {
    return (<Row rowNumber={rowNumber} row={row} />);
  }

  return (
    <div className="shopping-list">
      {maze.map((item, i) => handleRow(i, maze[i]))}
    </div>
  );
}

export default Maze;
