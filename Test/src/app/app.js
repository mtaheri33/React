import React, { Component } from 'react';
import ChildAppOne from './children/childAppOne';

class DefaultApp extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  setValue = (newValue) => {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <>
        <h1>Parent App:</h1>
        <p>Value: {this.state.value}</p>
        <ChildAppOne setValue={this.setValue} />
      </>
    )
  }
}

export default DefaultApp;