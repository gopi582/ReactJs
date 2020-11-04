import React, { Component } from "react";
import HOCCounter from "./HOCCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleCount}>
          Hovered on {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default HOCCounter(HoverCounter);
