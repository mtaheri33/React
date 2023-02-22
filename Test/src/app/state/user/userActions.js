import * as actionTypes from "../actionTypes";

export const addUser = (user) => {
  return {
    type: actionTypes.USER_ADD,
    payload: user
  };
};