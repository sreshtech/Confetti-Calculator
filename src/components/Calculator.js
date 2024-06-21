import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(evaluate(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttonClass = (value) => {
    if (value === '=') return 'equals';
    if (['+', '-', '×', '÷', '±', '%'].includes(value)) return 'operator';
    if (['(', ')', 'mc', 'm+', 'm-', 'mr', 'C', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', 'x!', 'sin', 'cos', 'tan', 'e', 'EE', 'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand'].includes(value)) return 'special';
    return '';
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="button-grid">
        {['(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '±', '%', '÷', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×', '1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-', 'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+', 'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='].map((btn, index) => (
          <button key={index} className={buttonClass(btn)} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
