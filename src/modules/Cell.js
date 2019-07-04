import React, { useState } from 'react';

function Cell(props){
    const[value] = useState(props.value);

    return (
        <div className="square">
            {value}
        </div>
    );
    
}

export default Cell;
