import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import jwtDecode from "jwt-decode";
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { isAuthenticated, getToken } from "./services/auth";
import { setCurrentUser } from "./actions/authAction";
// import { Router } from "react-router-dom";
import { Router } from "react-router";
import routes from "./services/router";
// import auth from "./reducers/auth";
import "./index.css";
// import NavBar from "./components/navbar/navbar";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

if (isAuthenticated()) {
  store.dispatch(setCurrentUser(jwtDecode(getToken())));
}

// {/* <App /> */}
// {/* <Routes /> */}
// {/* <NavBar /> */}
ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory} routes={routes} />
  </Provider>,
  document.getElementById("root"),
);
// ReactDOM.render(<Login />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
