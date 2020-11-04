import React, { useState } from "react";

export default function CounterHook() {
  const initialVal = 0;
  const [count, setCount] = useState(initialVal);
  return (
    <div>
      Button Clicked on {count} times
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
