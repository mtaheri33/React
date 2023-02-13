import React, { Component } from 'react';
import ChildAppOne from './children/childAppOne';
import ChildAppTwo from './children/childAppTwo';

class DefaultApp extends Component {
  constructor() {
    super();
    this.state = {
      childOneName: 'child one',
      childOneNewLine: 'child one line 3',
      childTwoName: 'child two',
      childTwoNewLine: 'child two line 3',
    }
    // childOneNewLine is passed to the child.  The child displays the value, so at first it
    // shows child one line 3.  However, if you change the value of this state attribute, the
    // changes will be reflected in the child as well.  So, after 3 seconds it shows state changed
    // in parent. 
    setInterval(() => {
      this.setState({ childOneNewLine: 'state changed in parent' })
    }, 3000)
  }

  render() {
    return (
      <>
        <h1>Parent App:</h1>
        <p>parent line 1</p>
        <p>parent line 2</p>
        <ChildAppOne name={this.state.childOneName} newLine={this.state.childOneNewLine} />
        <ChildAppTwo name={this.state.childTwoName} newLine={this.state.childTwoNewLine} />
      </>
    )
  }
}

export default DefaultApp;