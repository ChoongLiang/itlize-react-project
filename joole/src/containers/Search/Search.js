import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Login from "../Login/Login";

import { connect } from "react-redux";
import * as actions from "../../store/actions/actionTypes";

import "./Search.css";
import Logo from "../../Logo.png";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [
        "Machines",
        "Fan",
        "Chair",
        "Table",
        "Fridge",
        "Counter",
        "Bed",
        "Light",
        "Desk",
        "Carpet",
        "Chip"
      ],
      searchTerm: {
        value: ""
      }
    };
    this.insertSearchTerm = this.insertSearchTerm.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchTerm);
  };

  insertSearchTerm(input) {
    let updatedInput = {
      ...this.state.searchTerm
    };
    updatedInput.value = input;
    this.setState({
      searchTerm: updatedInput
    });
  }

  render() {
    return (
      <div className="search-box mt-5">
        <Switch>
          <Route path="/login" exact component={Login} />
          {this.props.authorization ? null : (
            <Redirect
              from="/search"
              to={{
                pathname: "/login",
                state: { showMessage: true, message: "Please login first!" }
              }}
            />
          )}
        </Switch>

        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>
        <form className="mt-4" onSubmit={this.handleSubmit} autoComplete="off">
          <Autocomplete
            suggestions={this.state.suggestions}
            onSearchTerm={this.insertSearchTerm}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authorization: state.authorized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({
        type: actions.LOGIN,
        loginData: { username: username, password: password }
      }),
    search: term =>
      dispatch({
        type: actions.SEARCH,
        searchData: { term: term }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
