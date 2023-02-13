import React, { Component } from 'react';

class ChildAppTwo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h2>Child App Two:</h2>
        <p>{this.props.name} line 1</p>
        <p>{this.props.name} line 2</p>
        <p>{this.props.newLine}</p>
        {/* When there are multiple elements, you can use this.props.children to include everything.
        Or, you can index it. */}
        {this.props.children[0]}
      </>
    )
  }
}

export default ChildAppTwo;