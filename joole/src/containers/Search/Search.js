import React, { Component } from "react";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import "./Search.css";
import Logo from "../../Logo.png";

class Search extends Component {
  state = {
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
    ]
  };

  handleSubmit() {}

  render() {
    return (
      <div className="search-box mt-5">
        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>
        <form className="mt-4" onSubmit={this.handleSubmit} autoComplete="off">
          <Autocomplete suggestions={this.state.suggestions} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({
        type: actions.LOGIN,
        loginData: { username: username, password: password }
      })
  };
};

export default connect(mapDispatchToProps)(Search);
