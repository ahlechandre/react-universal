import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onDecrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }))
  }

  onIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
          <button type="button" onClick={this.onIncrement}>+</button>
          <button type="button" onClick={this.onDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
