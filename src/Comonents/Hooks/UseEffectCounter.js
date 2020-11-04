import React, { useState,useEffect } from "react";

export default function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title=`Clicked on ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Cliked {count} times</button>
    </div>
  );
}
