import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator-app">
      {/* Result Display */}
      <h1>Calculator</h1>
      <form>
        <input type="text" value={result} ref={inputRef} />
      </form>
      {/* Keypad */}
      <div className="keypad">
        <button id="clear" className="grid-item" onClick={clear}>
          Clear
        </button>
        <button id="backspace" className="grid-item" onClick={backspace}>
          Back
        </button>
        <button name="+" className="grid-item" onClick={handleClick}>
          +
        </button>
        <button name="7" className="grid-item" onClick={handleClick}>
          7
        </button>
        <button name="8" className="grid-item" onClick={handleClick}>
          8
        </button>
        <button name="9" className="grid-item" onClick={handleClick}>
          9
        </button>
        <button name="-" className="grid-item" onClick={handleClick}>
          -
        </button>
        <button name="4" className="grid-item" onClick={handleClick}>
          4
        </button>
        <button name="5" className="grid-item" onClick={handleClick}>
          5
        </button>
        <button name="6" className="grid-item" onClick={handleClick}>
          6
        </button>
        <button name="*" className="grid-item" onClick={handleClick}>
          *
        </button>
        <button name="1" className="grid-item" onClick={handleClick}>
          1
        </button>
        <button name="2" className="grid-item" onClick={handleClick}>
          2
        </button>
        <button name="3" className="grid-item" onClick={handleClick}>
          3
        </button>
        <button name="/" className="grid-item" onClick={handleClick}>
          /
        </button>
        <button name="0" className="grid-item" onClick={handleClick}>
          0
        </button>
        <button name="." className="grid-item" onClick={handleClick}>
          .
        </button>
        <button id="result" className="grid-item" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
