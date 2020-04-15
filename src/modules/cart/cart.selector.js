export const selectCart = (state) =>
  state.cart.cart;

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((total,element)=>{
    return total + element.price
  },0);

export const selectCartLength = (state) =>
  state.cart.cart.length;

export const selectCartIds = (state) =>
  state.cart.cart.map(e => e.id);