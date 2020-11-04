import React, { Component } from 'react'
import UserContext from './ReactContext';

export default class ChildComp extends Component{
      render(){        
        return(
        <div>{this.context} in Child Comp</div>
        );
    }

}

ChildComp.contextType = UserContext