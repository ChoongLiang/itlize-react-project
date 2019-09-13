import React, { Component, Fragment } from "react";
import "./Autocomplete.css";
import * as actions from "../../store/actions/package";

import { connect } from "react-redux";

class Autocomplete extends Component {
  state = {
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
    selected: null
  };

  onChange = e => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = this.props.categories.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      filteredSuggestions,
      showSuggestions: true,
      userInput: userInput
    });
  };

  onClick = event => {
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.innerText,
      selected: this.findCategory(event.target.innerText)
    });
  };

  findCategory(value) {
    for (let category of this.props.categories) {
      if (category.name === value) {
        return category;
      }
    }
    return null;
  }

  onFocus = () => {
    if (this.props.categories !== null) {
      this.setState({
        filteredSuggestions: this.props.categories.map(
          suggestion => suggestion
        ),
        showSuggestions: true
      });
    }
  };

  onBlur = () => {
    this.setState({
      showSuggestions: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.selected);
    this.props.history.push("/search/" + this.state.selected.name);
  };

  render() {
    const {
      onChange,
      onClick,
      onFocus,
      onBlur,
      handleSubmit,
      state: { filteredSuggestions, showSuggestions, userInput }
    } = this;

    let optionsList = [];

    if (showSuggestions) {
      if (filteredSuggestions.length) {
        optionsList = (
          <div className="list-group" id="autocomplete">
            {filteredSuggestions.map(suggestion => {
              return (
                <a
                  className="list-item"
                  key={suggestion.id}
                  onMouseDown={onClick}
                >
                  {suggestion.name}
                </a>
              );
            })}
          </div>
        );
      } else {
        optionsList = (
          <div id="autocomplete" className="list-group">
            <a className="list-item">Not found</a>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <form onSubmit={handleSubmit} autoComplete="off" className="w-100">
          <div className="row my-3">
            <div className="col input-container">
              <select className="select-category">
                <option>Mechanical</option>
              </select>
              <div className="arrow-down" id="search-arrow" />
              <input
                type="text"
                required
                placeholder="search..."
                onChange={onChange}
                name="search"
                id="searchInput"
                onFocus={onFocus}
                onBlur={onBlur}
                value={userInput}
                className="normal-input"
              />
              <div className="arrow-down" id="input-arrow" />
              <div>
                <button className="input-logo" id="search-btn">
                  <i id="search-logo" className="fas fa-search" />
                </button>
              </div>
              {optionsList}
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.search.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: category => dispatch(actions.search(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);
