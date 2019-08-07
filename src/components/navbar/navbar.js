import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";
import { isAuthenticated } from "../../services/auth";
// import { withRouter } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  constructor() {
    super();

    // console.log("navbar construcror", this.props, this.state);
    this.state = {
      isAuthenticated: isAuthenticated(),
    };

    this.onLogout = async e => {
      e.preventDefault();
      // this.props.logoutAction();

      console.log("history,ctx logout", this.props, this.context);

      this.props.logoutAction().then(res => {
        console.log("result", res);
        this.props.changeUrlAction("/login");
      });
    };
  }

  render() {
    // console.log("render props", this.props);
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

// export default withRouter(NavBar);
// export default NavBar;

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // { logoutAction },
)(NavBar);
