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
        const response = await api.post("/login", {
          email,
          password,
        });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
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
            placeholder="Enter email"
            onChange={e => this.setState({ email: e.target.value })}
          />

          <p>Password</p>
          <input
            type="password"
            name="txtpwd"
            placeholder="***"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <div style={{ color: "red", marginTop: "5px" }}>
            {this.state.error}
          </div>

          <input
            type="submit"
            name="btnLogin"
            value="Sign in"
            placeholder="Sign in"
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
