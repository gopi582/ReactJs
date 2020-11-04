import React, { useState } from "react";

export default function ArrayHook() {
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...items,{
      id: items.length,
      name: Math.floor(Math.random() * 10) + 1,

      
      }]);
  };
  return (
    <div>
      <button onClick={addItem}> Add Item</button>
      
          <ul>
            {
                items.map(item =>(
                <li key={item.id}>{item.id}{item.name}</li>
                ))
            }
          </ul>
      
    </div>
  );
}
