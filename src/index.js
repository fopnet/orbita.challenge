// import auth from "./reducers/auth";
// import NavBar from "./components/navbar/navbar";
import jwtDecode from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { setCurrentUser } from "./actions/authAction";
import "./index.css";
import rootReducer from "./reducers";
import { getToken, isAuthenticated } from "./services/auth";
import Root from "./services/router";
import * as serviceWorker from "./serviceWorker";
// import { createBrowserHistory } from "history";
// const newHistory = createBrowserHistory();

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

if (isAuthenticated()) {
  store.dispatch(setCurrentUser(jwtDecode(getToken())));
}

// {/* <App /> */}
// {/* <Routes /> */}
// {/* <NavBar /> */}
ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root"),
);
// ReactDOM.render(<Login />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
