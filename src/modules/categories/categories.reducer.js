import { CATEGORIES_ACTION_TYPES } from './categories.action';

const INITIAL_STATE = {
  categories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return state = {
        categories: action.value,
      };
    default:
      return state;
  }
}