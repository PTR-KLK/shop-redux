import { PRODUCTS_ACTION_TYPES } from './products.action';

const INITIAL_STATE = {
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return state = {
        products: action.value,
      };
    default:
      return state;
  }
}