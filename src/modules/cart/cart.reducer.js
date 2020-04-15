import { CART_ACTION_TYPES } from './cart.action';

const INITIAL_STATE = {
    cart: [],
  };

  export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case CART_ACTION_TYPES.ADD_ITEM:
        return state = {
          ...state,
          cart: [...state.cart, action.item]
        };
      default:
        return state;
    }
  }