import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/package";

import Login from "../Login/Login";
import Search from "../Search/Search";
import Nav from "../../components/Nav/Nav";
import Signup from "../Signup/Signup";
import Products from "../Products/Products";
import Product_Detail from "../Products/Detail/Detail";
import Compare from "../Products/Compare/Compare";

import "./Auth.css";

class Auth extends Component {
  componentDidMount() {
    if (!this.props.authorization) {
      this.props.logout();
    }
  }

  render() {
    return (
      <div className="skyblue">
        <div className="inner-border">
          <div className="nav">
            <Nav auth={this.props.authorization} active={this.props.active} />
          </div>
          <div className="content">
            {this.props.authorization ? (
              <Switch>
                <Route path="/search" exact component={Search} />
                <Route path={"/search/:category"} exact component={Products} />
                <Route
                  path={"/search/:category/compare"}
                  exact
                  component={Compare}
                />
                <Route
                  path={"/search/:category/:id"}
                  exact
                  component={Product_Detail}
                />
                <Redirect from="/" to="/search" />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      showMessage: true,
                      message: "Please login first!"
                    }
                  }}
                />
              </Switch>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authorization: state.auth.token !== null,
    active: state.search.active !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
