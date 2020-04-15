import { CART_ACTION_TYPES } from './cart.action';

const INITIAL_STATE = {
    total: 0,
    cart: [],
  };

  export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case CART_ACTION_TYPES.ADD_ITEM:
        return state = {
          ...state,
          total: state.total + action.value,
        };
      default:
        return state;
    }
  }