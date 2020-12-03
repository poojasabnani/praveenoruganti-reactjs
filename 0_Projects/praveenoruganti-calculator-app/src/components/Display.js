import React from 'react';

const displayStyle = {
    background: "black",
    color: "white",
    textAlign: "right",
    paddingRight: 20
}

const Display = (props) => {

    return (
        <div id="display" style={displayStyle}>
            <h2>{props.secondNumber !== '' ? props.secondNumber : props.firstNumber}</h2>
        </div>
    )

}
export default Display;
