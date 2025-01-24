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
//         // Remove underscores from the input before evaluating
//         const sanitizedInput = input.replace(/_/g, '');
//         const safeResult = evaluate(sanitizedInput);
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
//         {[
//           '1', '2', '3', '+', 
//           '4', '5', '6', '-', 
//           '7', '8', '9', '*', 
//           'C', '0', '=', '/', '_'
//         ].map((btn) => (
//           <button
//             key={btn}
//             className={`btn ${btn === 'C' ? 'clear' : ''}`}
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

  // Function to format numbers with underscores
  const formatWithUnderscores = (number) => {
    return number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '_'); // Adds underscores as thousand separators
  };

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        // Remove underscores from the input before evaluating
        const sanitizedInput = input.replace(/_/g, '');
        const safeResult = evaluate(sanitizedInput);
        setResult(formatWithUnderscores(safeResult));
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
        {[
          '1', '2', '3', '+', 
          '4', '5', '6', '-', 
          '7', '8', '9', '*', 
          'C', '0', '=', '/', '_'
        ].map((btn) => (
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
