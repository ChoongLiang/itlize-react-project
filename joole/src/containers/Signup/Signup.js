import React, { Component } from "react";
import "./Signup.css";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/package";

import Spinner from "../../components/UI/Spinner/Spinner";

class Signup extends Component {
  state = {
    form: {
      username: {
        config: {
          type: "text",
          placeholder: "Username"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 15,
          noWhitespace: true
        },
        classes: "normal-input",
        valid: false
      },
      email: {
        config: {
          type: "email",
          placeholder: "Mail Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          noWhitespace: true
        },
        classes: "normal-input",
        valid: false
      },
      name: {
        config: {
          type: "text",
          placeholder: "Full Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3
        },
        classes: "normal-input",
        valid: false
      },
      password: {
        config: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          noWhitespace: true
        },
        classes: "normal-input",
        valid: false
      }
    },
    isFormValid: false
  };

  changeHandler = (event, idx) => {
    let updatedForm = {
        ...this.state.form
      },
      updatedFormElement,
      empty = true,
      type = event.target.name;
    switch (idx) {
      case 0:
        updatedFormElement = {
          ...this.state.form.username
        };
        empty = false;
        break;
      case 1:
        updatedFormElement = {
          ...this.state.form.email
        };
        empty = false;
        break;
      case 2:
        updatedFormElement = {
          ...this.state.form.name
        };
        empty = false;
        break;
      case 3:
        updatedFormElement = {
          ...this.state.form.password
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
      updatedFormElement.classes = this.assignClasses(updatedFormElement.valid);
      let formIsValid = this.checkFormValidity(
        updatedForm,
        updatedFormElement,
        type
      );
      this.setState({ form: updatedForm, isFormValid: formIsValid });
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
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.noWhitespace) {
      isValid = value.indexOf(" ") < 0 && isValid;
    }
    return isValid;
  }

  assignClasses(valid) {
    let classes = ["font-weight-bold"];
    if (valid) {
      classes.push("valid");
    } else {
      classes.push("invalid");
    }
    return classes.join(" ");
  }

  checkFormValidity(form, element, type) {
    let formIsValid = true;
    form[type] = element;
    for (let input in form) {
      formIsValid = form[input].valid && formIsValid;
    }
    return formIsValid;
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.signup(
      this.state.form.username.value,
      this.state.form.email.value,
      this.state.form.name.value,
      this.state.form.password.value
    );
  };

  render() {
    let username = this.state.form.username,
      email = this.state.form.email,
      name = this.state.form.name,
      password = this.state.form.password;

    let formClass = "d-block";

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
        <div className="alert alert-warning mt-4">{this.props.error}</div>
      );
    }

    let redirect;
    if (this.props.success) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="login-box mt-5">
        <h1 className="text-secondary text-center">Sign up</h1>
        {loading}
        {error}
        {redirect}
        <form onSubmit={this.submitHandler} className={formClass}>
          <div className="row mt-4 mb-2">
            <div className="col">
              <input
                type={username.config.type}
                required={username.validation.required}
                placeholder={username.config.placeholder}
                onChange={event => this.changeHandler(event, 0)}
                name="username"
                className={username.classes}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <input
                type={email.config.type}
                required={email.validation.required}
                placeholder={email.config.placeholder}
                onChange={event => this.changeHandler(event, 1)}
                name="email"
                className={email.classes}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <input
                type={name.config.type}
                required={name.validation.required}
                placeholder={name.config.placeholder}
                onChange={event => this.changeHandler(event, 2)}
                name="name"
                className={name.classes}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <input
                type={password.config.type}
                required={password.validation.required}
                placeholder={password.config.placeholder}
                onChange={event => this.changeHandler(event, 3)}
                name="password"
                className={password.classes}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-right">
              <button
                className="login-btn btn-block"
                disabled={!this.state.isFormValid}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="mt-3 text-center">
            <Link to="/">Home</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.signup.loading,
    error: state.signup.error,
    authRedirectPath: state.signup.authRedirectPath,
    success: state.signup.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, name, password) =>
      dispatch(actions.signup(username, email, name, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
