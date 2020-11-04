import React, { Component } from 'react'
import ChildComp from './ChildComp'

const UserContext = React.createContext()

export default class ContextPass extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value="Seelam">
                    <ChildComp/>
                </UserContext.Provider>
            </div>
        )
    }
}

export {UserContext}