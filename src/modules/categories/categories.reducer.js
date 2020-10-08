import { CATEGORIES_ACTION_TYPES } from "./categories.action";

const INITIAL_STATE = {
  categories: [],
  loading: true,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return (state = {
        categories: action.value,
        loading: action.loading,
      });
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
      return (state = {
        ...state,
        error: action.error,
        loading: action.loading,
      });
    default:
      return state;
  }
};
