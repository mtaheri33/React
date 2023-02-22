// This file is used to bootstrap the entire react application.

import React from "react"; // default import
import * as ReactDOM from "react-dom/client"; // importing all modules
import { Provider } from "react-redux";
import store from "./app/state/store";

import App from "./app/app";//react application

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);