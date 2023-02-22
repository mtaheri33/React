import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "./user/userReducer";

const logger = () => (next) => (action) => {
  next(action);
};

const rootReducer = combineReducers({
  userReducer,
});

export default configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(logger, thunk)
);