import React from "react";
import { Route } from "react-router";
import {
  //   // BrowserRouter as Router,
  Redirect,
  //   Route,
  //   // Switch,
} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import SignUp from "../pages/signup/signup";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

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

export default (
  <Route path="/" component={App}>
    {/* <NavBar /> */}
    {/* <GlobalStyle /> */}
    <Route exact path="login" component={Login} />
    {/* <Route exact path="/" component={App} /> */}
    <Route exact path="signup" component={SignUp} />
    <Route exact path="dashboard" component={Dashboard} />
    <PrivateRoute path="app" component={() => <h1>App</h1>} />
    <Route path="*" component={() => <h1>Page not found</h1>} />
  </Route>
);
