import React, { useReducer } from "react";

const initialState = {
  firstCounter: 1,
  secondCOunter: 2,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment5":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "Decrement2":
      return { ...state,firstCounter: state.firstCounter - action.value };
    case "Reset":
      return initialState;
    case "Increment8":
      return {...state, secondCOunter: state.secondCOunter + action.value };
    case "Decrement4":
      return {...state, secondCOunter: state.secondCOunter - action.value };
  }
};

export default function ReducerCounterObject() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        First Counter {count.firstCounter}
        Second Counter {count.secondCOunter}
      </div>
      <button onClick={() => dispatch({ type: "Increment5", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 2 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "Increment8", value: 8 })}>
          Increment 8
        </button>
        <button onClick={() => dispatch({ type: "Decrement4", value: 4 })}>
          Decrement 4
        </button>
      </div>
    </div>
  );
}
