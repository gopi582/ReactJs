import React,{useState,useEffect} from 'react'

export default function ConditionalHook() {
    const [count,SetCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log("Use effect rendered")
        document.title=`Clicked on ${count} times`
    },[count])
    return (
        <div>
            <input type="text" defaultValue={name} onChange={(e) => setName({name: e.target.value})}/>
            <button onClick={()=>SetCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}
