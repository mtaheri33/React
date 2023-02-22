import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../state/user/userActions';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.User.userName,
      password: props.User.password,
      email: props.User.email,
    };
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.addUserHandler = this.addUserHandler.bind(this);
  }

  setUserName(event) {
    this.setState({ userName: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }
  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  addUserHandler(event) {
    event.preventDefault();
    this.props.addUser(this.state);
  }

  render() {
    return (
      <>
        <p>User</p>
        <form onSubmit={this.addUserHandler}>
          <p>Add User:</p>
          <label>Username:</label>
          <input type='text' onChange={this.setUserName}></input>
          <br></br>
          <label>Password:</label>
          <input type='password' onChange={this.setPassword}></input>
          <br></br>
          <label>Email:</label>
          <input type='email' onChange={this.setEmail}></input>
          <br></br>
          <button>Add User</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.userReducer
  }
}

const mapDispatchToStore = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToStore)(User);

/*
You type in values in the input fields.  The state is automatically updated.
You click Add User button.  This runs the addUserHandler method from this file.
It then runs the addUser function from userActions.js.  The argument for this function
is the current state.
After this, the userReducer function from userReducer.js runs.  The action.type is
the value for the type attribute and the action.payload is the vaule for the payload
attribute from the object returned by addUser.
userReducer then goes through the different cases.  The object returned by the function
is the new state.
*/