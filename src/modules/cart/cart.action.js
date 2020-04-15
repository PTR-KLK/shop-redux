export const CART_ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const ACTION_ADD_ITEM = (item) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM,
    item: item,
  };
};

export const ACTION_REMOVE_ITEM = (id) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    id: id,
  };
};
