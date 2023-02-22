import * as actionTypes from "../actionTypes";

let initialState = {
  userName: null,
  password: null,
  email: null,
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_ADD:
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;