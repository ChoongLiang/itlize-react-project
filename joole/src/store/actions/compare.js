import * as actionTypes from "./actionTypes";

export const compare = products => {
  return {
    type: actionTypes.COMPARE_PRODUCT,
    products: products
  };
};
