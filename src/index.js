import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as reducer from "./state/reducer";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import "bulma/css/bulma.css";
import "./styles.scss";


const monsterReducer = combineReducers({
  count: reducer.countReducer,
  carReducer: reducer.carReducer,
  additionalPrice:reducer.carReducer,
});

const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
