import React, { useState } from 'react';
import Cell from './Cell';

function Row(props){
    const[row] = useState(props.row);
    const[rowNumber] = useState(props.rowNumber);

    function handleCell(x, y, value){
        return (<Cell x={x} y={y} value={value} />);
    }

    return (
        <div className="row">
            {row.map(function(key, index){
                return handleCell(index, rowNumber, row[index]);
            })}
        </div>
    );
}

export default Row;
