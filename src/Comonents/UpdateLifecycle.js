import React, { Component } from 'react'

class UpdateLifecycle extends Component {
    shouldComponentUpdate(){
        console.log('in shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('in componentDidUpdate');
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    changeState=()=>{
        this.setState({
            name:"Gopi"
        })
    }

    render() {
        console.log('in render');
        return (
            <div>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default UpdateLifecycle
