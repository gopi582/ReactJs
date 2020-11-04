import React, { Component } from 'react'
import { UserConsumer } from './ReactContext'

export default class ComponentB extends Component {
    render() {
        return (
           <UserConsumer>
             {  (userName) =>{
                return <p> Hello  {userName} in Component B</p>
               }}
           </UserConsumer>
        )
    }
}
