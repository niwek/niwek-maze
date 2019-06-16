import React from 'react';
import Cell from './Cell';

class Maze extends React.Component {
    constructor(props){
        super(props);

        var x = Math.floor(Math.random() * 5 + 5); // Number between 5 - 10
        var y = Math.floor(Math.random() * 5 + 5); // Number between 5 - 10

        this.state = {
            maze: Array(x).fill(Array(y).fill(null))
        };
    }

    handleCell(x, y, value){
        return (<Cell x={x} y={y} value={value} />);
    }

    render(){
        return (
            <div className="shopping-list">
                {/* How to create a for loop here */}
                {/* {this.state.maze.map(
                    function(row => {
                        row.map(function(cell => {
                            this.handleCell(cell, row, value)
                        }))
                })} */}
            </div>
        );
    }
}

export default Maze;