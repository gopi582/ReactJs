import React, { useState, useMemo } from "react";

export default function UseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounter1 = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounter2 = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("in Even");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  },[counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCounter1}>Increment {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCounter2}>Increment {counterTwo}</button>
      </div>
    </div>
  );
}
