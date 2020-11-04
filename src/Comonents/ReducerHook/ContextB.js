import React,{useContext} from 'react'
import { CounterContext } from './ReducerContext'

export default function ContextB() {
    const countContext = useContext(CounterContext)
    return (
        <div>
            <div>
                Count value is {countContext.count}
            </div>
            <p>In Context B</p>
            <button onClick={()=>countContext.dispatchCount('Increment')} >Increment</button>
            <button onClick={()=>countContext.dispatchCount('Decrement')} >Decrement</button>
            <button onClick={()=>countContext.dispatchCount('Reset')} >Reset</button>
        </div>
    )
}
