import React, { Component } from "react";

const HOCCounter = (OriginalComponent) => {
  class CounterClass extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleCount={this.handleCount}
          {...this.props}
        />
      );
    }
  }
  return CounterClass;
};

export default HOCCounter;
