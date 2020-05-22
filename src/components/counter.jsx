import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: 0,
  };

  handleDecrement = () => {
    this.state.value !== 0 && this.setState({ value: this.state.value - 1 });
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <div class="counterWrapper">
          <p id="currentCount"> {this.state.value} </p>
        </div>
        <div class="buttonWrapper">
          <button
            onClick={this.handleDecrement}
            class="upAndDownButtons"
            id="downArrowToDecrement"
          >
            ⬇
          </button>
          <button onClick={this.handleReset} id="resetButton">
            Reset to 0
          </button>
          <button
            onClick={this.handleIncrement}
            class="upAndDownButtons"
            id="upArrowToIncrement"
          >
            ⬆
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
