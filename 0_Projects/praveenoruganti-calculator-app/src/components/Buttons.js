import React from 'react';

const Buttons = (props) => {
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black"
    }
    const handleClick = () => {
        switch (props.name) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                props.updateSecondNumber(props.name);
                break;
            case "+":
            case "-":
            case "x":
            case "/":
            case "=":
                props.updateOperator(props.name);
                break;
            case "C":
                props.reset();
                break;
            default:
                break;
        }
    }
    return (
        <button
            id={props.id}
            style={buttonStyle}
            onClick={handleClick}>
            <h3>{props.name}</h3>
        </button>
    )
}

export default Buttons;




