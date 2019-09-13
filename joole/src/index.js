import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// React & Redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import authReducer from "./store/reducers/auth";
import searchReducer from "./store/reducers/search";
import signupReducer from "./store/reducers/signup";
import productReducer from "./store/reducers/product";
import compareReducer from "./store/reducers/compare";
import filterReducer from "./store/reducers/filter";

// Debugger
import { compose } from "redux";

// thunk
import thunk from "redux-thunk";

// Interceptor
import axios from "axios";

// Global interceptor configuration
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.common["Authorization"] = null;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log(request);
    request.headers.Authorization = localStorage.getItem("token");
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// React-redux debugger
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine all reducer
const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  signup: signupReducer,
  product: productReducer,
  compare: compareReducer,
  filter: filterReducer
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
