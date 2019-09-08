import React, { Component } from "react";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

import { connect } from "react-redux";
import * as actions from "../../store/actions/package";

import "./Search.css";
import Logo from "../../Logo.png";

class Search extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="alert alert-warning mt-2">{this.props.error}</div>
      );
    }

    return (
      <div className="search-box mt-5">
        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>
        {error}
        <div className="mt-4">
          <Autocomplete {...this.props} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(actions.init())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
