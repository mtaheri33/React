import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../state/user/userActions';

const User2 = function (props) {
  const [userName, setStateUserName] = useState(props.User.userName);
  const [password, setStatePassword] = useState(props.User.password);
  const [email, setStateEmail] = useState(props.User.email);

  const setUserName = function (event) {
    setStateUserName(event.target.value);
  };
  const setPassword = function (event) {
    setStatePassword(event.target.value);
  };
  const setEmail = function (event) {
    setStateEmail(event.target.value);
  };
  const addUserHandler = function (event) {
    event.preventDefault();
    props.addUser({ userName, password, email });
  };

  return (
    <>
      <form onSubmit={addUserHandler}>
        <p>Add User:</p>
        <label>Username:</label>
        <input type='text' onChange={setUserName}></input>
        <br></br>
        <label>Password:</label>
        <input type='password' onChange={setPassword}></input>
        <br></br>
        <label>Email:</label>
        <input type='email' onChange={setEmail}></input>
        <br></br>
        <button>Add User</button>
      </form>
    </>
  )
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

export default connect(mapStateToProps, mapDispatchToStore)(User2);