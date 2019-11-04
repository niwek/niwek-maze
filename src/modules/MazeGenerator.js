import React from 'react';
import Maze from './Maze';

function MazeGenerator() {
  const range = 10;
  const minimum = 5;

  const width = Math.floor(Math.random() * range + minimum);
  const length = Math.floor(Math.random() * range + minimum);

  const myMaze = [];
  for (let i = 0; i < length; i += 1) {
    const thisRow = [];
    for (let j = 0; j < width; j += 1) {
      const newObject = {
        X: j,
        Y: i,
        visited: false,
        current: false,
        removeTop: false,
        removeBottom: false,
        removeLeft: false,
        removeRight: false,
      };

      thisRow.push(newObject);
    }
    myMaze.push(thisRow);
  }

  return (<Maze myMaze={myMaze} width={width} length={length} />);
}

export default MazeGenerator;
