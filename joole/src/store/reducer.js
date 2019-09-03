import * as actions from "./actions";

const initial = {
  authorized: false
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actions.LOGIN:
      const loginData = {
        username: action.loginData.username,
        password: action.loginData.password
      };
      console.log(loginData.username + " tried to log in");
      return {
        ...state,
        authorized: true
      };
    case actions.LOGOUT:
      return {
        ...state,
        authorized: false
      };
    default:
      return {
        ...state,
        authorized: false
      };
  }
};

export default reducer;
