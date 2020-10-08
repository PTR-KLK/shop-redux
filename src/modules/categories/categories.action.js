export const CATEGORIES_ACTION_TYPES = {
  FETCH_INIT_CATEGORIES: "FETCH_INIT_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR: "FETCH_CATEGORIES_ERROR",
};

export const ACTION_FETCH_INIT_CATEGORIES = () => {
  return (dispatch) => {
    fetch("https://simple-shop-19e34.firebaseio.com/categories.json")
      .then((response) => response.json())
      .then((json) =>
        dispatch(
          ACTION_FETCH_CATEGORIES_SUCCESS(
            Object.entries(json).map((e) => ({
              key: e[0],
              name: e[1],
            }))
          )
        )
      )
      .catch((error) => {
        console.error("Error:", error);
        dispatch(ACTION_FETCH_CATEGORIES_ERROR());
      });
  };
};

export const ACTION_FETCH_CATEGORIES_SUCCESS = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    value: categories,
    loading: false,
  };
};

export const ACTION_FETCH_CATEGORIES_ERROR = () => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR,
    error: true,
    loading: false,
  };
};
