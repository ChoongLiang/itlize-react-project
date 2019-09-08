import axios from "axios";
import * as actionTypes from "./actionTypes";

export const init = () => {
  return dispatch => {
    dispatch(start());
    const body = {
        request: "get_all"
      },
      url = "CategoryHandler";

    axios
      .post(url, body)
      .then(response => {
        if (response.status === 200) {
          dispatch(fetched(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(fail("You are not authorized!"));
      });
  };
};

export const start = () => {
  return {
    type: actionTypes.CATEGORY_INIT
  };
};

export const fetched = categories => {
  return {
    type: actionTypes.CATEGORY_FETCHED,
    categories: categories
  };
};

export const fail = error => {
  return {
    type: actionTypes.CATEGORY_FAIL,
    error: error
  };
};

export const search = category => {
  return {
    type: actionTypes.CATEGORY_SEARCH,
    active: category
  };
};
