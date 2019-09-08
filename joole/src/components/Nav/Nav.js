import React from "react";
import profileImg from "../../profileImg.jpg";
import { NavLink } from "react-router-dom";
import Autocomplete from "../Autocomplete/Autocomplete";
import Logo from "../../Logo.png";

const navBar = props => {
  if (props.auth) {
    const profile = {
      height: 70,
      width: 70
    };

    const autocompleteWidth = {
      width: "800px"
    };

    const navLogo = {
      width: "200px",
      height: "100px"
    };

    let logo, autocomplete;
    if (props.active) {
      logo = (
        <div className="navbar-nav mr-auto">
          <img src={Logo} alt="logo" style={navLogo} />
        </div>
      );
      autocomplete = (
        <div className="navbar-nav mx-auto" style={autocompleteWidth}>
          <Autocomplete />
        </div>
      );
    }

    return (
      <nav className="navbar navbar-expand w-100 mr-3">
        <div className="navbar-collapse collapse w-100">
          {logo}
          {autocomplete}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-secondary font-weight-bold pt-4">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <img
                style={profile}
                className="rounded-circle"
                src={profileImg}
                alt="user profile img"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar w-100">
      <div className="ml-auto">
        <NavLink
          className="nav-link text-secondary font-weight-bold"
          activeClassName="d-none"
          to="/signup"
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default navBar;
