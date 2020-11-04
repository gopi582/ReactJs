import React, { useReducer } from "react";
import ContextA from "../ReducerHook/ContextA";

export const CounterContext = React.createContext();
const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};

export default function ReducerContext() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <CounterContext.Provider
        value={{ count: count, dispatchCount: dispatch }}
      >
        <ContextA />
      </CounterContext.Provider>
    </div>
  );
}
