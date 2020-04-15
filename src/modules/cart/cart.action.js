export const CART_ACTION_TYPES = {
    ADD_ITEM: 'ADD_ITEM',
  };
  
  export const ACTION_ADD_ITEM = (itemPrice) => {
    return {
      type: CART_ACTION_TYPES.ADD_ITEM,
      value: itemPrice,
    }
  };
