import React from "react";
import profileImg from "../profileImg.jpg";

const navBar = props => {
  if (props.auth) {
    const profile = {
      height: 70,
      width: 70
    };
    return (
      <nav className="navbar navbar-expand w-100 mr-3">
        <div className="navbar-collapse collapse w-100">
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
        <a className="nav-link text-secondary font-weight-bold">Sign up</a>
      </div>
    </nav>
  );
};

export default navBar;
