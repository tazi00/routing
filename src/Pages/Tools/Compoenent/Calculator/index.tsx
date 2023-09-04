import { useReducer } from "react";
import { reducer, initalState } from "./store";
function Calculator() {
  const [state, dispatch] = useReducer(reducer, initalState);
  // console.log(state.digit + 1);

  return (
    <div className="calculator-box">
      <div className="calculator">
        <div className="screen">
          <h3>
            {state.previousOperad} {state.operator}
          </h3>
          <h2>
            {state.currentOperand || 0}
            <span onClick={() => dispatch({ type: "remove" })}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvs1ctZW4z1CzRwgZICS29Rpbjprs3xddkA&usqp=CAU"
                alt=""
              />
            </span>
          </h2>
        </div>
        <div className="btns">
          <ul>
            <li data-content="(">(</li>
            <li data-content=")">)</li>
            <li data-content="%">%</li>
            <li data-content="AC" onClick={() => dispatch({ type: "reset" })}>
              AC
            </li>
            <li
              data-content="9"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "9" });
              }}
            >
              9
            </li>
            <li
              data-content="8"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "8" });
              }}
            >
              8
            </li>
            <li
              data-content="7"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "7" });
              }}
            >
              7
            </li>
            <li
              data-content="/"
              onClick={() => {
                dispatch({ type: "addOperator", payload: "/" });
              }}
            >
              /
            </li>
            <li
              data-content="6"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "6" });
              }}
            >
              6
            </li>
            <li
              data-content="5"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "5" });
              }}
            >
              5
            </li>
            <li
              data-content="4"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "4" });
              }}
            >
              4
            </li>
            <li
              data-content="x"
              onClick={() => {
                dispatch({ type: "addOperator", payload: "*" });
              }}
            >
              x
            </li>
            <li
              data-content="3"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "3" });
              }}
            >
              3
            </li>
            <li
              data-content="2"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "2" });
              }}
            >
              2
            </li>
            <li
              data-content="1"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "1" });
              }}
            >
              1
            </li>
            <li
              data-content="-"
              onClick={() => {
                dispatch({ type: "addOperator", payload: "-" });
              }}
            >
              -
            </li>
            <li data-content="=" onClick={() => dispatch({ type: "result" })}>
              =
            </li>
            <li
              data-content="."
              onClick={() => {
                dispatch({ type: "addDigit", payload: "." });
              }}
            >
              .
            </li>
            <li
              data-content="0"
              onClick={() => {
                dispatch({ type: "addDigit", payload: "0" });
              }}
            >
              0
            </li>
            <li
              data-content="+"
              onClick={() => dispatch({ type: "addOperator", payload: "+" })}
            >
              +
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
