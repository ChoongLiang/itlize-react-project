import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../Login/Login";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";

import "./Auth.css";

export default class Auth extends Component {
  state = {
    storage: {},
    auth: false
  };

  render() {
    return (
      <div className="skyblue">
        <div className="nav">
          <Nav auth={this.state.auth} />
        </div>
        <div className="content">
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/login" exact component={Login} />
            {this.state.auth ? (
              <Redirect from="/" to="/search" />
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Switch>
        </div>
      </div>
    );
  }
}
