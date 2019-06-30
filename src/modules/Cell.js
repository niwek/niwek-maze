import React, { useState } from 'react';

function Cell(props){
    const[x, setX] = useState(props.x);
    const[y, setY] = useState(props.y);
    const[value, setValue] = useState(props.value);

    return (
        <div className="square">
            {value}
        </div>
    );
    
}

export default Cell