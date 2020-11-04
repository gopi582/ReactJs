import React, { Component } from "react";
import HOCCounter from "./HOCCounter";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleCount}>
    {this.props.name}Button clicked on {this.props.count} times
        </button>
      </div>
    );
  }
}

export default HOCCounter(ClickCounter);
