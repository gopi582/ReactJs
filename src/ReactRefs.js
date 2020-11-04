import React, { Component } from 'react'

export default class ReactRefs extends Component {
    constructor(props) {
        super(props)
        this.currentVal = React.createRef()
        this.getValue = this.getValue.bind(this);
    }
    
    componentDidMount(){
        this.currentVal.current.focus()
    }

    getValue(){
        alert(this.currentVal.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.currentVal}/>
                <button onClick={this.getValue}>Submit</button>
            </div>
        )
    }
}
