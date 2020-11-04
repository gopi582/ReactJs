import React,{useState} from 'react'

export default function ObjectArrayHook() {
    const [items,setItems] = useState([])
    const addItem= () =>{
        setItems([...items,{
            id:items.length,
            value:Math.random()
        }])
    }
    return (
        <div>
            <button onClick={addItem}>AddItem</button>
            <ul>
                {
                    items.map(item =>
                    <li key={item.id}>{item.value}</li>)                    
                }
            </ul>
            <h2>{JSON.stringify(items)}</h2>
        </div>
    )
}
