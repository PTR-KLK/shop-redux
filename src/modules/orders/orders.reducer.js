import { ORDERS_ACTION_TYPES } from "./orders.action";

const INITIAL_STATE = {
  orders: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.PLACE_ORDER:
      return (state = {
        ...state,
        orders: [...state.orders,{name: action.name, lastName: action.lastName, items: action.items}],
      });
    default:
      return state;
  }
};
