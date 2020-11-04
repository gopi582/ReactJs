import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment8":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement5":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function ReducerObjectHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h4>First Counter Value {count.firstCounter}</h4>
        <h4>Second Counter Value {count.secondCounter}</h4>
      </div>

      <button onClick={() => dispatch({ type: "Increment", value: 3 })}>
        Increment 3
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 2 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "Increment8", value: 8 })}>
          Increment Second Counter
        </button>
        <button onClick={() => dispatch({ type: "Decrement5", value: 5 })}>
          Decrement Second Counter
        </button>
      </div>
    </div>
  );
}
