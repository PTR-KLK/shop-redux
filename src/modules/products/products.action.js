export const PRODUCTS_ACTION_TYPES = {
  FETCH_INIT_PRODUCTS: "FETCH_INIT_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_LOADING: "FETCH_PRODUCTS_LOADING",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
};

export const ACTION_FETCH_INIT_PRODUCTS = (endpoint) => {
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/${endpoint}`)
      .then((response) => response.json())
      .then((json) => dispatch(ACTION_FETCH_PRODUCTS_SUCCESS(json)));
  };
};

export const ACTION_FETCH_PRODUCTS_SUCCESS = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    value: products,
  };
};
