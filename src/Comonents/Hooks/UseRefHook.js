import React, { useRef, useEffect, useState } from "react";

export default function UseRefHook() {
  const initialData = {
    name: "",
  };
  const inputRef = useRef(null);
  const [data, setName] = useState(initialData);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = () => {
    setName(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
      {data.name}
    </div>
  );
}