import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/actionTypes";

import Search from "../Search/Search";

import "./Login.css";
import Logo from "../../Logo.png";

class Login extends Component {
  state = {
    loginForm: {
      username: {
        elementConfig: {
          type: "text",
          placeholder: "Username or Email"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 15
        },
        valid: false
      },
      password: {
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6
        },
        valid: false
      }
    },
    isFormValid: false,
    loading: false
  };

  handleSubmit = () => {
    this.props.login(
      this.state.loginForm.username.value,
      this.state.loginForm.password.value
    );
  };

  handleChange = (event, idx) => {
    let updatedForm = {
        ...this.state.loginForm
      },
      updatedFormElement,
      empty = true,
      type = "";
    switch (idx) {
      case 0:
        updatedFormElement = {
          ...this.state.loginForm.username
        };
        empty = false;
        type = "username";
        break;
      case 1:
        updatedFormElement = {
          ...this.state.loginForm.password
        };
        empty = false;
        type = "password";
        break;
      default:
        console.log("Should never reach here");
        break;
    }
    if (!empty) {
      updatedFormElement.value = event.target.value;
      updatedFormElement.valid = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
      let formIsValid = this.checkFormValidity(
        updatedForm,
        updatedFormElement,
        type
      );
      this.setState({ loginForm: updatedForm, isFormValid: formIsValid });
    }
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  checkFormValidity(form, element, type) {
    let formIsValid = true;
    form[type] = element;
    for (let input in form) {
      formIsValid = form[input].valid && formIsValid;
    }
    return formIsValid;
  }

  render() {
    let username = this.state.loginForm.username;
    let password = this.state.loginForm.password;
    let message = null;

    if (this.props.location.state !== undefined) {
      message = (
        <div className="alert alert-danger" role="alert">
          {this.props.location.state.message}
        </div>
      );
    }
    return (
      <div className="login-box mt-5">
        <Switch>
          <Route path="/search" exact component={Search} />
          {this.props.authorization ? (
            <Redirect from="/login" to="/search" />
          ) : null}
        </Switch>
        {message}

        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 text-center">
          Building Product Selection Platform
        </h4>

        <form className="mt-4" onSubmit={this.handleSubmit}>
          <div className="row my-3">
            <div className="col input-container">
              <input
                type={username.elementConfig.type}
                className="font-weight-bold"
                required={username.validation.required}
                placeholder={username.elementConfig.placeholder}
                onChange={event => this.handleChange(event, 0)}
                name="username"
              />
              <div>
                <i className="fas fa-user fa-lg input-logo" />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col input-container">
              <input
                type={password.elementConfig.type}
                className="font-weight-bold"
                required={password.validation.required}
                placeholder={password.elementConfig.placeholder}
                onChange={event => this.handleChange(event, 1)}
                name="password"
              />
              <i className="fas fa-lock fa-lg input-logo" />
            </div>
          </div>
          <div className="row">
            <div className="col text-right">
              <button className="login-btn" disabled={!this.state.isFormValid}>
                Log In
              </button>
            </div>
          </div>
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
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
