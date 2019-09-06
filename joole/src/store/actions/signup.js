import axios from "axios";
import * as actionTypes from "./actionTypes";

export const signup = (username, email, name, password) => {
  return dispatch => {
    dispatch(start());
    const user = {
        username: username,
        email: email,
        name: name,
        password: password,
        role: ["admin"]
      },
      url = "http://localhost:8080/api/auth/signup";

    axios
      .post(url, user)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          dispatch(success());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(fail("Username is taken!"));
      });
  };
};

export const start = () => {
  return {
    type: actionTypes.SIGNUP_START
  };
};

export const success = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

export const fail = error => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error: error
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_REDIRECT_PATH,
    path: path
  };
};
