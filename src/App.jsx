import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //npm install and import mathjs
//root function
function App() {
  const [cal, setCal] = useState("");
  const [answer, setAnswer] = useState("");

  const signs = ["+", "-", "/", "*", "."]; //operators

  const updateCal = (value) => {
    if (
      signs.includes(value) && cal === '' ||
      signs.includes(value) && signs.includes(cal.slice(-1))
    ) {
      return;
    }
    //setCal
    setCal(cal + value)
    if (!signs.includes(value)) {
      setAnswer(evaluate(cal + value).toString());
    }

  }
  //create function for the evaluation;(=) button
  const equals = () => {
    setCal(evaluate(cal).toString());
  }
  //create delete function
  const del = () => {
    if (cal == "") {
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);

    if (signs.includes(value.slice(-1))) {
      setAnswer(evaluate(value.toString().slice(0, -1)));
    }
    else {
      setAnswer(evaluate(value.toString()));
    }
  }


  return (
    <section className="container">
      <div className="calculator">
        <div className="content">
          <p>{cal || "0"}</p> Ans: {answer}
        </div>
        <div className="signs">
          <button onClick={() => updateCal('+')}>+</button>
          <button onClick={() => updateCal('-')}>-</button>
          <button onClick={() => updateCal('/')}>/</button>
          <button onClick={() => updateCal('*')}>*</button>

          <button onClick={del}>del</button>
        </div>
        <div className='numbers'>
          <button onClick={() => updateCal('1')}>1</button>
          <button onClick={() => updateCal('2')}>2</button>
          <button onClick={() => updateCal('3')}>3</button>
          <button onClick={() => updateCal('4')}>4</button>
          <button onClick={() => updateCal('5')}>5</button>
          <button onClick={() => updateCal('6')}>6</button>
          <button onClick={() => updateCal('7')}>7</button>
          <button onClick={() => updateCal('8')}>8</button>
          <button onClick={() => updateCal('9')}>9</button>
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>

          <button onClick={equals} className="equal">=</button>
        </div>
      </div>
    </section>
  );
};
export default App;
