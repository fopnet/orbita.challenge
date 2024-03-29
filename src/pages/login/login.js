import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAction } from "../../actions/authAction";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleClick = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        this.props
          .loginAction(email, password)
          .then(
            () => this.props.history.push("/dashboard"),
            err => this.setState({ error: err.data.errors[0].message }),
          );
      } catch (err) {
        this.setState({
          error: "Invalid user or password",
        });
      }
    }
  };

  render() {
    return (
      <div className="loginBox">
        <img src={User} className="user" alt="user" />
        <h2>Log in</h2>
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p className="message">{this.state.error}</p>}

          <p>Email</p>
          <input
            type="text"
            name="txtmail"
            value={this.state.email}
            placeholder="Enter email"
            onChange={e => this.setState({ email: e.target.value })}
          />

          <p>Password</p>
          <input
            type="password"
            name="txtpwd"
            value={this.state.password}
            placeholder="***"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <input
            type="submit"
            name="btnLogin"
            value="Sign in"
            onClick={this.handleClick}
          />

          <Link to="/signup">Sign up free</Link>

          <img src={Logo} className="logo" alt="Orbita" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
  // history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    null,
    { loginAction },
  )(Login),
);
