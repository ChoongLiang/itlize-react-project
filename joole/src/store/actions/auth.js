import axios from "axios";
import * as actionTypes from "./actionTypes";

export const login = (username, password) => {
  return dispatch => {
    dispatch(start());
    const user = {
        username: username,
        password: password
      },
      url = "api/auth/signin";

    axios
      .post(url, user)
      .then(response => {
        if (response.status === 200) {
          let token = response.data.tokenType + " " + response.data.accessToken;
          localStorage.setItem("token", token);
          dispatch(success(token));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(fail("Username and password does not match!"));
      });
  };
};

export const start = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const success = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const fail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_REDIRECT_PATH,
    path: path
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.LOG_OUT
  };
};
