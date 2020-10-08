import { PRODUCTS_ACTION_TYPES } from "./products.action";

const INITIAL_STATE = {
  products: [],
  loading: true,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return (state = {
        products: action.value,
        loading: action.loading,
      });
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_LOADING:
      return (state = {
        ...state,
        loading: action.loading,
      });
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return (state = {
        ...state,
        error: action.error,
        loading: action.loading,
      });
    default:
      return state;
  }
};
