import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";
import { isAuthenticated } from "../../services/auth";
import "./navbar.css";

class NavBar extends Component {
  // static contextType = StateContext;

  constructor() {
    super();

    this.state = {
      isAuthenticated: isAuthenticated(),
    };

    this.onLogout = async e => {
      e.preventDefault();

      this.props.logoutAction().then(res => {
        this.props.changeUrlAction("/login");
      });
    };
  }

  render() {
    // console.log("render props", this.props);
    const { isAuthenticated, username } = this.props.auth;

    const signedInLinks = (
      <div className="login-container">
        <button onClick={this.onLogout}>Logout</button>
        <label>{username}</label>
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
  username: PropTypes.object,
  // logoutAction: PropTypes.func.isRequired,
  // changeUrlAction: PropTypes.func.isRequired,
};

// NavBar.contextType = {
//   router: PropTypes.object,
// };

const mapDispatchToProps = logoutAction();
// function mapDispatchToProps(dispatch) {
//   return {
//     changeUrl: url => dispatch(push(url)),
//     logoutAction: logoutAction,
//   };
// }

function mapStateToProps(state) {
  return {
    auth: state.auth,
    username: state.username,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // { logoutAction },
)(NavBar);
