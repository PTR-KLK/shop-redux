export const ORDERS_ACTION_TYPES = {
  PLACE_ORDER: "PLACE_ORDER",
};

export const ACTION_PLACE_ORDER = (name,lastName,items) => {
  return {
    type: ORDERS_ACTION_TYPES.PLACE_ORDER,
    name: name,
    lastName: lastName,
    items: items,
  };
};