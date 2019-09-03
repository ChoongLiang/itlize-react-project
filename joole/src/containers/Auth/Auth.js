import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import Login from "../Login/Login";
import Search from "../Search/Search";
import Nav from "../../components/Nav/Nav";

import "./Auth.css";

class Auth extends Component {
  render() {
    return (
      <div className="skyblue">
        <div className="inner-border">
          <div className="nav">
            <Nav auth={this.props.authorization} />
          </div>
          <div className="content">
            <Switch>
              <Route path="/search" exact component={Search} />
              <Route path="/login" exact component={Login} />
              {this.props.authorization ? (
                <Redirect from="/" to="/search" />
              ) : (
                <Redirect from="/" to="/login" />
              )}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authorization: state.authorized
  };
};

export default connect(mapStateToProps)(Auth);
