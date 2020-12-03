import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';
import buttonData from './buttonData'
import './Calculator.css'

let data = buttonData;

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('0');
    const [operator, setOperator] = useState('');

    const reset = () => {
        setFirstNumber('');
        setSecondNumber('0');
        setOperator('');
    }
    const backspace = () => {
        setFirstNumber(firstNumber.slice(0, -1));
        setSecondNumber(secondNumber.slice(0, -1));
        setOperator('');
    }

    const updateSecondNumber = (name) => {
        if (secondNumber === '0' && name === '.') {
            setSecondNumber(secondNumber + name);

        } else if (secondNumber === '0' && name !== '.') {
            setFirstNumber(secondNumber);
            setSecondNumber(name);

        } else if (name === '.' && secondNumber.includes('.')) {
            setSecondNumber(secondNumber);
        } else {
            setSecondNumber(secondNumber + name);
        }
    }

    const updateOperator = (name) => {
        if (operator === '') {
            setFirstNumber(secondNumber);
            setSecondNumber('');
            setOperator(name);

        } else if ((secondNumber === '' || secondNumber === '-') && name !== '-') {
            setSecondNumber('');
            setOperator(name);

        } else if (secondNumber === '' && name === '-') {
            setSecondNumber(name);

        } else {
            setFirstNumber(secondNumber);
            setSecondNumber('');
            setOperator(name);
            calculate();
        }
    }

    const calculate = () => {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case "-":
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case "x":
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case "/":
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                break;
        }
        setFirstNumber(result.toString());
        setSecondNumber('');
    }


    return (
        <div className="calculator-container">
            <Display secondNumber={secondNumber} firstNumber={firstNumber} />
            <div className="buttons-container">
                {data.map(button => (
                    <Buttons
                        id={button.id}
                        key={button.name}
                        name={button.name}
                        updateSecondNumber={updateSecondNumber}
                        updateOperator={updateOperator}
                        reset={reset}
                        backspace={backspace}
                    />
                ))}
            </div>
        </div>
    )
}

