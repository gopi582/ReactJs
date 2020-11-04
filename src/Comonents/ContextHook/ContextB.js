import React,{useContext} from 'react'
import {FirstName,LastName} from '../../App'


export default function ContextB() {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);
    return (
        <div>
           {firstName} -- {lastName}
        </div>
    )
}
