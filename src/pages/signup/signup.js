import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import api from "../../services/api";
import "./signup.css";

class SignUp extends Component {
  stateDefault = "Choose your state";

  states = [
    this.stateDefault,
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OR",
    "PA",
    "TX",
    "UT",
    "VT",
    "WI",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "IL",
    "MA",
    "MD",
    "ME",
    "MN",
    "MO",
    "NH",
  ];

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      state: this.stateDefault,
      error: "",
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  // ...
  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password, state } = this.state;
    if (!name || !email || !password || this.stateDefault === state) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const query = `mutation ($input: UserCreateInput!) {
              createUser(input: $input) {
                id
                name
              }
            }
          `;

        const input = {
          input: {
            name: name,
            email: email,
            password: password,
            state: state,
          },
        };
        const data = {
          query: query,
          variables: input,
        };

        // console.log(data);

        api.post("/", data).then(resp => {
          // console.log(resp.data);
          if (resp.data.errors) {
            alert(`Error: ${resp.data.errors}`);
          } else {
            this.resetForm();
            const user = resp.data.data.createUser;
            alert(
              `User (${user.id}) - ${
                user.name
              } registered succesful. Please sign in.`,
            );
            this.props.history.push("/login");
          }
        });
      } catch (err) {
        console.error(err);
        this.setState({
          error: "Ocorreu um erro ao registrar sua conta. T.T",
        });
      }
    }
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      password: "",
      state: this.stateDefault,
      error: "",
    });
  }

  render() {
    return (
      <div className="signUpBox">
        <img src={User} className="user" alt="user" />
        <h2>Sign up</h2>

        <form onSubmit={this.handleSignUp}>
          {this.state.error && <p className="message">{this.state.error}</p>}

          <p>Name</p>
          <input
            type="text"
            placeholder="Name"
            tabIndex="1"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <p>Email</p>
          <input
            type="email"
            tabIndex="2"
            placeholder="e-mail"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <p>Password</p>
          <input
            tabIndex="3"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <div>
            {/* <p>Choose your state:</p> */}
            <select
              value={this.state.state}
              tabIndex="4"
              onChange={e =>
                this.setState({
                  state: e.target.value,
                  error:
                    e.target.value === "" ? "You must select your state" : "",
                })
              }
            >
              {this.states.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <input type="submit" value="Sign up free" />

          <hr />
          <Link to="/login">Sign in</Link>

          <img src={Logo} className="logo" alt="Orbita" />
        </form>
      </div>
    );
  }
}

export default SignUp;
