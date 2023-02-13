import React, { Component } from 'react';
import ChildAppOne from './children/childAppOne';
import ChildAppTwo from './children/childAppTwo';

class DefaultApp extends Component {
  constructor() {
    super();
    this.state = {
      childOneName: "child one",
      childOneNewLine: "child one line 3",
      childTwoName: "child two",
      childTwoNewLine: "child two line 3",
    }
  }

  render() {
    return (
      <>
        <h1>Parent App:</h1>
        <p>parent line 1</p>
        <p>parent line 2</p>
        <ChildAppOne name={this.state.childOneName} newLine={this.state.childOneNewLine}>
          <p>child one line 4</p>
        </ChildAppOne>
        <ChildAppTwo name={this.state.childTwoName} newLine={this.state.childTwoNewLine}>
          <p>child two line 4</p>
          <p>second element of props.children</p>
        </ChildAppTwo>
      </>
    )
  }
}

export default DefaultApp;