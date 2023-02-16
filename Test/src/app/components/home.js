import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
    }
    this.nameInputHandler = this.nameInputHandler.bind(this);
    this.ageInputHandler = this.ageInputHandler.bind(this);
  }

  nameInputHandler(event) {
    this.setState({ name: event.target.value })
  }

  ageInputHandler(event) {
    this.setState({ age: event.target.value })
  }

  render() {
    return (
      <>
        <p>Home</p>
        <label>Name:</label>
        <input type='text' onChange={this.nameInputHandler}></input>
        <br></br>
        <label>Age:</label>
        <input type='number' onChange={this.ageInputHandler}></input>
        {/* These will update as characters are typed into the inputs. */}
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </>
    )
  }
}

export default Home;