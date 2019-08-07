import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { setCurrentUser } from "./actions/authAction";
// import { ConnectedRouter as Router } from "connected-react-router";
// import auth from "./reducers/auth";
// import NavBar from "./components/navbar/navbar";
// import { routerMiddleware } from "react-router-redux";
import history from "./history";
import { rootReducer } from "./reducers";
import { isAuthenticated, loggedUser } from "./services/auth";
import Root from "./services/router";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

if (isAuthenticated()) {
  loggedUser().then(user => {
    return store.dispatch(setCurrentUser(user));
  });
}

ReactDOM.render(
  <Router>
    <Root store={store} history={history} />
  </Router>,
  document.getElementById("root"),
);
// ReactDOM.render(<Login />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
