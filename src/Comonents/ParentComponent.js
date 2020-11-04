import React, { Component } from 'react'
import ReactMemo from './ReactMemo'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Gopi"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"seelam"})
        },2000)
    }
    
    render() {
        console.log('In Parent Component')
        return (
            <div>
               <ReactMemo name ={this.state.name}/> 
            </div>
        )
    }
}
