import { CART_ACTION_TYPES } from "./cart.action";

const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      return (state = {
        ...state,
        cart: [...state.cart, action.item],
      });
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return (state = {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.id),
      });
    case CART_ACTION_TYPES.CLEAR_CART:
      return (state = {
        ...state,
        cart: [],
      });
    default:
      return state;
  }
};
