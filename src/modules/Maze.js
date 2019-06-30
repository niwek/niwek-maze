import React, { useState } from 'react';
import Cell from './Cell';

function Maze() {

    const[x, setX] = useState(Math.floor(Math.random() * 5 + 5));
    const[y, setY] = useState(Math.floor(Math.random() * 5 + 5));
    const[maze, setMaze] = useState(Array(x).fill(Array(y).fill(null)));

    function handleCell(x, y, value){
        return (<Cell x={x} y={y} value={value} />);
    }

    function handleBoard(){
        maze((key, index) => {
            maze[index].map((key2, index2) => {
                this.handleCell()
            });
        })
    }
    return (
        <div className="shopping-list">
            {maze.map(function(item, i){
                return maze[i].map(function(item, j){
                    return handleCell(i, j, maze[i][j])
                })
            })}
        </div>
    );

}

export default Maze;