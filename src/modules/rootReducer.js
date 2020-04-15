import { combineReducers } from 'redux';
import cart from './cart/cart.reducer';
import productList from './productList/productList.reducer';

export default combineReducers({
  cart: cart,
  productList: productList,
});