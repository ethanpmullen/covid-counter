import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTED": {
      console.log(action.payload.value);
      return { ...state, value: action.payload.value };
    }
    case "DECREMENTED":
      return { ...state, value: action.payload.value };
    case "RESET":
      return { ...state, value: action.payload.value };
    case "INITIALIZED_COUNT":
      return { ...state, value: action.payload.value };
    case "INPUTTED_VALUE":
      return { ...state, value: action.payload.value };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
