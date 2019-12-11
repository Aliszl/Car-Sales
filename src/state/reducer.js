//A reducer is a function that returns an object
//The returned object represents the state tree
import React from "react";
import ReactDOM from "react-dom";
import { createstore } from "redux";
import { Provider } from "react-redux";

function reducer() {
  return {};
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
