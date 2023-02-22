import * as actionTypes from "../actionTypes";
const axios = require('axios');

const addUserState = (user) => {
  return {
    type: actionTypes.USER_ADD,
    payload: user
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    let data = JSON.stringify(user);
    const headers = { headers: { 'content-type': 'application/json' } };
    axios.post('http://localhost:3000/users', data, headers)
      .then((result) => {
        dispatch(addUserState({
          userName: result.data.userName,
          password: result.data.password,
          email: result.data.email,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }
};