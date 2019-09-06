import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/package";

import "./Login.css";
import Logo from "../../Logo.png";

import Spinner from "../../components/UI/Spinner/Spinner";

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
          minLength: 6
        },
        valid: false
      }
    },
    isFormValid: false,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
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
      type = event.target.name;
    switch (idx) {
      case 0:
        updatedFormElement = {
          ...this.state.loginForm.username
        };
        empty = false;
        break;
      case 1:
        updatedFormElement = {
          ...this.state.loginForm.password
        };
        empty = false;
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
    let formClass = "d-block";

    if (this.props.location.state !== undefined) {
      message = (
        <div className="alert alert-danger" role="alert">
          {this.props.location.state.message}
        </div>
      );
    }

    let loading;
    if (this.props.loading) {
      let style = {
        marginTop: "100px"
      };
      loading = (
        <div className="d-flex justify-content-center" style={style}>
          <Spinner width="200px" height="200px" />
        </div>
      );
      formClass = "d-none";
    }

    let error;
    if (this.props.error) {
      error = (
        <div className="alert alert-warning mt-2">{this.props.error}</div>
      );
    }

    let redirect;
    if (this.props.success) {
      redirect = <Redirect to="/search" />;
    }

    return (
      <div className="login-box mt-5">
        <div className="text-center">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h4 className="mt-2 mb-4 text-center">
          Building Product Selection Platform
        </h4>
        {message}
        {loading}
        {error}
        {redirect}
        <form className={formClass} onSubmit={this.handleSubmit}>
          <div className="row my-3">
            <div className="col input-container">
              <input
                type={username.elementConfig.type}
                className="font-weight-bold normal-input"
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
                className="font-weight-bold normal-input"
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
    authorization: state.auth.authorized,
    loading: state.auth.loading,
    error: state.auth.error,
    success: state.auth.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(actions.login(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
