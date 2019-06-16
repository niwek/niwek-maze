import React from 'react'

class Cell extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            x: props.x,
            y: props.y,
            value: props.value,
        }
    }

    render(){
        return (
            <div className="square">
                {this.state.value}
            </div>
        );
    }
}

export default Cell