import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";
import { isAuthenticated } from "../../services/auth";
import "./navbar.css";
class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: isAuthenticated(),
    };

    this.onLogout = async e => {
      e.preventDefault();
      this.props.logoutAction();

      logoutAction();
      // if (this.props.history) {
      //   this.props.history.push("/login");
      // }
    };
  }

  render() {
    console.log("render props", this.props);
    const { isAuthenticated } = this.props.auth;

    const signedInLinks = (
      <div className="login-container">
        <button onClick={this.onLogout}>Logout</button>
        <label>Felipe </label>
      </div>
    );
    const guestLinks = (
      <div className="login-container">
        <Link to="/login">Login</Link>
        {/* <a href="/login">Login</a> */}
      </div>
    );

    return (
      <div className="topnav">
        {isAuthenticated ? signedInLinks : guestLinks};
      </div>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired,
};

// export default withRouter(NavBar);
// export default NavBar;

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(
  mapStateToProps,
  { logoutAction },
)(NavBar);
