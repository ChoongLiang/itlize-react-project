import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "../Search/Search";

import "./Login.css";
import Logo from "../Logo.png";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    valid: false
  };

  handleSubmit = event => {
    console.log(this.state);
    console.log(this.identifyIdType());
    event.preventDefault();

    //TODO: server authentication
    this.setState({
      valid: true
    });
  };

  identifyIdType() {
    if (this.state.username.indexOf("@") > 0) {
      return "email";
    }
    return "username";
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="login-box mt-5">
        <Switch>
          <Route path="/search" exact component={Search} />
          {this.state.valid ? <Redirect from="/login" to="/search" /> : null}
        </Switch>

        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>

        <form className="mt-4" onSubmit={this.handleSubmit}>
          <div className="row my-3">
            <div className="col input-container">
              <input
                type="text"
                className="font-weight-bold"
                required
                placeholder="Username or Email"
                onChange={this.handleChange}
                name="username"
              />
              <div>
                <i className="fas fa-user fa-lg input-logo" />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col input-container">
              <input
                type="password"
                className="font-weight-bold"
                required
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
              />
              <i className="fas fa-lock fa-lg input-logo" />
            </div>
          </div>
          <div className="row">
            <div className="col text-right">
              <input type="submit" value="Log In" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
