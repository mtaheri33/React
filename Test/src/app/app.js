import React, { Component } from 'react';
import "./styles.css";
import ChildAppOne from './components/childAppOne';

class DefaultApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>Parent App</h1>
        <ChildAppOne />
      </>
    )
  }
}

export default DefaultApp;