import React from 'react'
import ContextB from '../ReducerHook/ContextB'

export default function ContextA() {
    return (
        <div>
            <p>In Context A</p>
           <ContextB/> 
        </div>
    )
}
