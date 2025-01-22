// import React, { useState } from 'react';
// import './Calculator.css';
// import { evaluate } from 'mathjs'; // Import evaluate from math.js

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleClick = (value) => {
//     if (value === 'C') {
//       setInput('');
//       setResult('');
//     } else if (value === '=') {
//       try {
//         // Use math.js evaluate function to safely evaluate the expression
//         const safeResult = evaluate(input);
//         setResult(safeResult.toString());
//       } catch {
//         setResult('Error');
//       }
//     } else {
//       setInput(input + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <div className="input">{input || '0'}</div>
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((btn) => (
//           <button
//             key={btn}
//             className={btn === 'C' ? 'clear' : ''}
//             onClick={() => handleClick(btn)}
//           >
//             {btn}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;



import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs'; // Import evaluate from math.js

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        // Use math.js to evaluate the input safely
        const safeResult = evaluate(input);
        setResult(safeResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((btn) => (
          <button
            key={btn}
            className={`btn ${btn === 'C' ? 'clear' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

