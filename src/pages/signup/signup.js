import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import api from "../../services/api";
import "./signup.css";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
  };

  // ...
  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="signUpBox">
        <img src={User} className="user" alt="user" />
        <h2>Sign up</h2>
        <form onSubmit={this.handleSignUp}>
          {this.state.error && <p className="message">{this.state.error}</p>}

          <p>User Name</p>
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input type="submit" value="Cadastrar grátis" />

          <hr />
          <Link to="/login">Sign in</Link>

          <img src={Logo} className="logo" alt="Orbita" />
        </form>
      </div>
    );
  }
}

export default SignUp;
