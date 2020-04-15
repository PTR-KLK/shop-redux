export const PRODUCTLIST_ACTION_TYPES = {
  FETCH_INIT_LIST: "FETCH_INIT_LIST",
  FETCH_LIST: "FETCH_LIST",
};

export const ACTION_FETCH_INIT_LIST = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => dispatch(ACTION_FETCH_LIST(json)));
  };
};

export const ACTION_FETCH_LIST = (productList) => {
  return {
    type: PRODUCTLIST_ACTION_TYPES.FETCH_LIST,
    value: productList,
  };
};
