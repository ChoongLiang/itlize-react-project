import * as actionTypes from "../actions/actionTypes";

const initial = {
  active: null,
  categories: null,
  error: null
};

const init = (state, action) => {
  return {
    ...state,
    error: null,
    categories: null,
    active: null
  };
};

const fetched = (state, action) => {
  return {
    ...state,
    active: null,
    categories: action.categories,
    error: null
  };
};

const search = (state, action) => {
  return {
    ...state,
    active: action.active,
    error: null
  };
};

const fail = (state, action) => {
  return {
    ...state,
    error: action.error,
    active: null
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_INIT:
      return init(state, action);
    case actionTypes.CATEGORY_FETCHED:
      return fetched(state, action);
    case actionTypes.CATEGORY_SEARCH:
      return search(state, action);
    case actionTypes.CATEGORY_FAIL:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;
