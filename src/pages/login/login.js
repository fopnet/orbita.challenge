import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { login } from "../../services/auth";
import User from "../../assets/user.png";
import Logo from "../../assets/logo.png";
import api from "../../services/api";
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
        const query = {
          query: `mutation  {
              login(password: "${password}", email: "${email}") {
                token
              }
          }`,
        };

        const response = await api.post("/", query);

        if (response.data.errors) {
          this.setState({ error: response.data.errors[0].message });
        } else {
          this.setState({ error: "", password: "", email: "" });
          login(response.data.data.login.token);
          // console.log(response.data.data.login.token);
          this.props.history.push("/dashboard");
        }
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

export default withRouter(Login);
