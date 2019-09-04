import * as actions from "../actions/actionTypes";

const initial = {
  term: {
    value: ""
  }
};

const search = (state = initial, action) => {
  switch (action.type) {
    case actions.SEARCH:
      const searchData = {
        term: action.searchData.term
      };
      console.log("Searching " + searchData.term + "...");
      return {
        ...state,
        authorized: true
      };
    default:
      return {
        ...state,
        term: {
          value: ""
        }
      };
  }
};

export default search;
