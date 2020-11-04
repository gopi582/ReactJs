import React, { PureComponent } from 'react'

export default class LifeCycleComponent extends PureComponent {
    constructor(props) {
        super(props)    
        console.log('in Constructor');
        this.state = {
             name:'Gopi'
        }
    }
    
    componentDidMount(){
        console.log('in Component did');
    }

    render() {
        console.log('in render');
        return (
            <div>
                
            </div>
        )
    }
}
