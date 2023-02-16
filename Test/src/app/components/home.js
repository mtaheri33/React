import React, { Component, createRef } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
    }
    this.formInputHandler = this.formInputHandler.bind(this);
    this.name = createRef();
    this.age = createRef();
  }

  formInputHandler(event) {
    event.preventDefault();
    this.setState({
      name: this.name.current.value,
      age: this.age.current.value,
    });
  }

  render() {
    return (
      <>
        <p>Home</p>
        <form onSubmit={this.formInputHandler}>
          <label>Name:</label>
          <input type='text' ref={this.name}></input>
          <br></br>
          <label>Age:</label>
          <input type='number' ref={this.age}></input>
          <br></br>
          <button>Submit</button>
        </form>
        {/* These will update once the form is submitted. */}
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </>
    )
  }
}

export default Home;