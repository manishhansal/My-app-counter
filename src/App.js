import React from "react";
import "./index.css";

export default function App() {
  const [counter, setCounter] = React.useState(5);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  const handleMultipyByTwo = (value) => {
    setCounter(counter * value)
  }

  const resetVal = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrement(1)}>ADD</button>
      <button onClick={() => handleIncrement(-1)}>REDUCE</button>
      <button onClick={() => handleMultipyByTwo(2)}>DOUBLE</button>
      <button onClick={() => resetVal()}>RESET</button>
    </div>
  )
}