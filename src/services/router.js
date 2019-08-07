import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
// import Redirect from "react-router-dom";
// import { isAuthenticated } from "./auth";
import App from "../App";
import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import SignUp from "../pages/signup/signup";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

// const Routes = () => (
//   <Router>
//     <Switch>
//       <NavBar />
//       {/* <GlobalStyle /> */}
//       <Route exact path="/login" component={Login} />
//       <App path="/">
//         <Route exact path="/" component={App} />
//         <Route exact path="/signup" component={SignUp} />
//         <Route exact path="/dashboard" component={Dashboard} />
//       </App>
//       <PrivateRoute path="/app" component={() => <h1>App</h1>} />
//       <Route path="*" component={() => <h1>Page not found</h1>} />
//     </Switch>
//   </Router>
// );

const Root = ({ store, history }) => (
  <Provider store={store} history={history}>
    <Route path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/dashboard" component={Dashboard} />
    {/* <PrivateRoute path="app" component={() => <h1>App</h1>} /> */}
    {/* <Route path="*" component={() => <h1>Page not found</h1>} /> }</div> */}
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
