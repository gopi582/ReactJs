import React, { useState } from "react";
import useCustomHook from "./useCustomHook";

export default function DocumentTitle1() {
  const [count, setCount] = useState(0);
  useCustomHook(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
