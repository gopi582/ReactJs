import React, { useState, useEffect } from "react";

export default function IntervalHook() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(()=>{
      console.log("In use effect")
      setInterval(tick,1000)

      return(()=>{
          console.log("Before destroying")
          clearInterval(count)
      })
  },[])

  return <div>{count}</div>;
}
