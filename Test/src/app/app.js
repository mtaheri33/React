import React, { Component } from 'react';
import ChildAppOne from './children/childAppOne';
import ChildAppTwo from './children/childAppTwo';

class DefaultApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>Parent App:</h1>
        <p>parent line 1</p>
        <p>parent line 2</p>
        <ChildAppOne />
        <ChildAppTwo />
      </>
    )
  }
}

export default DefaultApp;