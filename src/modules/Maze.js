/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { PropTypes as T } from 'prop-types';
import './Maze.scss';

function Maze({ myMaze, length, width }) {
  const [maze, setMaze] = useState(myMaze);
  const [current, setCurrent] = useState({
    X: Math.floor(Math.random() * width),
    Y: Math.floor(Math.random() * length),
  });

  function displayCell(x, y, cell) {
    return (
      <div className={`square ${
        cell.removeBottom ? 'square-remove-bottom ' : ''
      }${cell.removeLeft ? 'square-remove-left ' : ''
      }${cell.removeRight ? 'square-remove-right ' : ''
      }${cell.removeTop ? 'square-remove-top ' : ''}`}
      >
        {current.X === x && current.Y === y ? <img alt="beach" src={`${process.env.PUBLIC_URL}/dot.png`} /> : null}
      </div>
    );
  }

  function displayRow(rowNumber, row) {
    return (
      <div className="row">
        {row.map((key, index) => displayCell(index, rowNumber, row[index]))}
      </div>
    );
  }

  function shuffle(array) {
    let currentIndex = array.length - 1;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element .
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  function getNextCell(currentCell, direction) {
    const nextCurrent = {
      X: currentCell.X,
      Y: currentCell.Y,
    };
    if (direction === 'N') {
      nextCurrent.Y -= 1;
    } else if (direction === 'S') {
      nextCurrent.Y += 1;
    } else if (direction === 'E') {
      nextCurrent.X += 1;
    } else if (direction === 'W') {
      nextCurrent.X -= 1;
    }
    return nextCurrent;
  }

  function removeBorder(oldCell, newCell, direction) {
    if (direction === 'N') {
      oldCell.removeTop = true;
      newCell.removeBottom = true;
    } else if (direction === 'S') {
      oldCell.removeBottom = true;
      newCell.removeTop = true;
    } else if (direction === 'E') {
      oldCell.removeRight = true;
      newCell.removeLeft = true;
    } else if (direction === 'W') {
      oldCell.removeLeft = true;
      newCell.removeRight = true;
    }
  }

  function carvePassagesFrom(currentCell, modifiableMaze) {
    const directions = ['N', 'S', 'E', 'W'];

    modifiableMaze[currentCell.Y][currentCell.X].visited = true;
    shuffle(directions);

    // eslint-disable-next-line array-callback-return
    directions.map((direction) => {
      const nextCurrent = getNextCell(currentCell, direction);
      if (nextCurrent.X >= 0 &&
        nextCurrent.X < width &&
        nextCurrent.Y >= 0 &&
        nextCurrent.Y < length &&
        !modifiableMaze[nextCurrent.Y][nextCurrent.X].visited) {
        removeBorder(modifiableMaze[currentCell.Y][currentCell.X], modifiableMaze[nextCurrent.Y][nextCurrent.X], direction);
        carvePassagesFrom(nextCurrent, modifiableMaze);
      }
    });
    return modifiableMaze;
  }

  function carvePassagesFromStart() {
    const modifiableMaze = maze.slice();

    const start = {
      X: current.X,
      Y: current.Y,
    };
    carvePassagesFrom(start, modifiableMaze);
    setMaze(modifiableMaze);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keyHandler = ({ key }) => {
    if (key === 'ArrowUp' &&
    maze[current.Y][current.X].removeTop) {
      const newCurrent = {
        X: current.X,
        Y: current.Y - 1,
      };
      setCurrent(newCurrent);
    }
    if (key === 'ArrowDown' &&
    maze[current.Y][current.X].removeBottom) {
      const newCurrent = {
        X: current.X,
        Y: current.Y + 1,
      };
      setCurrent(newCurrent);
    }

    if (key === 'ArrowRight' &&
    maze[current.Y][current.X].removeRight) {
      const newCurrent = {
        X: current.X + 1,
        Y: current.Y,
      };
      setCurrent(newCurrent);
    }
    if (key === 'ArrowLeft' &&
    maze[current.Y][current.X].removeLeft) {
      const newCurrent = {
        X: current.X - 1,
        Y: current.Y,
      };
      setCurrent(newCurrent);
    }
  };

  useEffect(() => {
    carvePassagesFromStart();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [keyHandler]);

  return (
    <div className="shopping-list">
      {maze.map((item, i) => displayRow(i, maze[i]))}
    </div>
  );
}

Maze.propTypes = {
  myMaze: T.arrayOf(T.arrayOf(T.shape({
    X: T.number.isRequired,
    Y: T.number.isRequired,
    current: T.bool.isRequired,
    visited: T.bool.isRequired,
    removeTop: T.bool.isRequired,
    removeBottom: T.bool.isRequired,
    removeLeft: T.bool.isRequired,
    removeRight: T.bool.isRequired,
  }))).isRequired,
  length: T.number.isRequired,
  width: T.number.isRequired,
};

export default Maze;
