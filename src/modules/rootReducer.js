import { combineReducers } from 'redux';
import cart from './cart/cart.reducer';
import products from './products/products.reducer';

export default combineReducers({
  cart: cart,
  products: products,
});