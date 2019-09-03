import React, { Component } from "react";
import "./Search.css";
import Logo from "../Logo.png";

export default class Search extends Component {
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
    ],
    filteredSuggestions: [],
    userInput: "",
    activeSuggestions: 0
  };

  onChange = e => {
    const userInput = e.currentTarget.value;
    const suggestions = this.state.suggestions;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: userInput
    });
  };

  render() {
    let optionList = [];

    if (this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        optionList = (
          <div className="list-group" id="autocomplete">
            {this.state.filteredSuggestions.map(suggestion => {
              let strIdx = suggestion.indexOf(this.state.userInput);
              let listItem = suggestion.split(this.state.userInput);
              let anchor = "";
              console.log(listItem);
              // for (let l of listItem) {
              //   console.log(l);
              //   if (l) {
              //     suggestion = suggestion.replace(
              //       l,
              //       "<strong>" + l + "</strong>"
              //     );
              //   }
              // }
              // suggestion = suggestion.replace(
              //   this.state.userInput,
              //   <p className="font-weight-light"> + this.state.userInput + </p>
              // );
              // console.log(suggestion);

              return <a className="list-item">{suggestion}</a>;
            })}
          </div>
        );
      } else {
        optionList = (
          <div id="autocomplete" className="list-group">
            <a className="list-item">Not found</a>
          </div>
        );
      }
    }

    return (
      <div className="search-box mt-5">
        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>

        <form className="mt-4" onSubmit={this.handleSubmit}>
          <div className="row my-3">
            <div className="col input-container">
              <select className="select-category">
                <option>Mechanical</option>
                <option>Angular</option>
                <option>HTML</option>
                <option>Css</option>
                <option>Javascript</option>
              </select>
              <div className="arrow-down" id="search-arrow" />
              <input
                type="text"
                required
                placeholder="search..."
                onChange={this.onChange}
                name="search"
                id="searchInput"
                autoComplete="off"
              />
              <div className="arrow-down" id="input-arrow" />
              <div>
                <button className="input-logo" id="search-btn">
                  <i id="search-logo" className="fas fa-search" />
                </button>
              </div>
            </div>
            {optionList}
          </div>
        </form>
      </div>
    );
  }
}
