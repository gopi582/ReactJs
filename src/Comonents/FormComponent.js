import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             UserId:"",
             Address:"",
             Language:"React"
        }
    }
    
    handleFormData=(event)=>{
        alert(`${this.state.UserId}`);
        event.preventDefault();
    }

    handleOnchange=(e)=>{
        this.setState({
            UserId:e.target.value
        })
    }

    render() {
        const {UserId,Address,Language} = this.props;      
        return (
           <form>
                <div>
                <label>User Id</label>
                <input type="text" value={UserId} onChange={this.handleOnchange}/>
            </div>
            <div>
                <label>Address</label>
                <textarea type="text" value={Address}/>
            </div>
            <div>
                <label>User Id</label>
                <select value={Language}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Java">Java</option>
                    </select>
            </div>
            <button type="submit" onClick={this.handleFormData}>Submit</button>
           </form>
        )
    }
}
