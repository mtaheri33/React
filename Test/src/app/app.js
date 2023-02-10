import React, { Component } from 'react';

class DefaultApp extends Component {
  constructor() {
    super();
    this.state = {
      firstValue: 1,
      secondValue: 2,
    }
    setTimeout(() => {
      this.setState({ secondValue: 20 })
    }, 3000);
    setTimeout(() => {
      this.setState({ thirdValue: 3 })
    }, 4000);
  }

  render() {
    return (
      <>
        <h1>React Application Template</h1>
        <p>The first value of {this.state.firstValue} is not changed.</p>
        <p>The second value {this.state.secondValue} will change after 3 seconds.</p>
        <p>The third value {this.state.thirdValue ? this.state.thirdValue : '____'} will appear after 4 seconds</p>
      </>
    )
  }
}

export default DefaultApp;