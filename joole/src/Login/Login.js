import React from "react";
import "./Login.css";

import JooleLogo from "../jooleLogo.png";

export default function Login() {
  return (
    <div className="login-box mt-5">
      <div className="text-center">
        <img src={JooleLogo} alt="logo" className="logo" />
      </div>
      <h4 className="mt-2 text-center">Building Product Selection Platform</h4>

      <form className="mt-4">
        <div className="row my-3">
          <div className="col">
            <input
              type="text"
              className="font-weight-bold"
              required
              placeholder="Username or Email"
            />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <input
              type="password"
              className="font-weight-bold"
              placeholder="Password"
            />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <input type="submit" value="Log In" />
          </div>
        </div>
      </form>
    </div>
  );
}
