import { PRODUCTLIST_ACTION_TYPES } from './productList.action';

const INITIAL_STATE = {
  productList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PRODUCTLIST_ACTION_TYPES.FETCH_LIST:
      return state = {
        productList: action.value,
      };
    default:
      return state;
  }
}