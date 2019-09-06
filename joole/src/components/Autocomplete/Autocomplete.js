import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./Autocomplete.css";

export default class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    onSearchTerm: PropTypes.instanceOf(Function)
  };

  static defaultProps = {
    suggestions: [],
    onSearchTerm: () =>
      console.log("(Autocomplete) Did not receive onChange from parent!")
  };

  constructor(props) {
    super(props);

    this.state = {
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    const { suggestions } = this.props;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
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
      userInput: event.target.innerText
    });
    this.props.onSearchTerm(event.target.innerText.trim());
  };

  onFocus = () => {
    this.setState({
      filteredSuggestions: this.props.suggestions.map(suggestion => suggestion),
      showSuggestions: true
    });
  };

  onBlur = () => {
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false
    });
  };

  render() {
    const {
      onChange,
      onClick,
      onFocus,
      onBlur,
      state: { filteredSuggestions, showSuggestions, userInput }
    } = this;

    let optionsList = [];

    if (showSuggestions) {
      if (filteredSuggestions.length) {
        optionsList = (
          <div className="list-group" id="autocomplete">
            {filteredSuggestions.map(suggestion => {
              return (
                <a className="list-item" key={suggestion} onMouseDown={onClick}>
                  {suggestion}
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
      </Fragment>
    );
  }
}
