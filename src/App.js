import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const isValid = () => {
    if (!num1) {
      alert("Invalid Input. Please enter the first number.");
      return false;
    }

    if (!num2) {
      alert("Invalid Input. Please enter the second number");
      return false;
    }

    return true;
  };

  const calcAdd = (val) => {
    if (isValid()) {
      setResult(Number(num1) + Number(num2));
    }
  };

  const calcSub = () => {
    if (isValid()) {
      setResult(Number(num1) - Number(num2));
    }
  };

  const calcMul = () => {
    if (isValid()) {
      setResult(Number(num1) * Number(num2));
    }
  };

  const calcDiv = () => {
    if (isValid()) {
      if (Number(num2) === 0) {
        alert("Invalid Input. Division cannot be done by zero");
      }

      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <>
      <div className="App">
        <div className="calculator">
          <h1>Simplest Working Calculator</h1>
          <hr />
          Num1:{" "}
          <input
            type="number"
            placeholder="Enter a number here"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <br />
          Num2:{" "}
          <input
            type="number"
            placeholder="Enter a number here"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
          Result:{" "}
          <input
            type="number"
            disabled={true}
            placeholder="Result here"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
          <br />
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => calcAdd()}>add</button>
            <button onClick={() => calcSub()}>subtract</button>
            <button onClick={() => calcMul()}>multiply</button>
            <button onClick={() => calcDiv()}>divide</button>
            <button
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                setNum1("");
                setNum2("");
              }}>
              reset input
            </button>
            <button
              style={{ backgroundColor: "orange" }}
              onClick={() => setResult("")}>
              reset result
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
