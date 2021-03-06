import { combineReducers } from 'redux';
import cart from './cart/cart.reducer';
import products from './products/products.reducer';
import orders from './orders/orders.reducer';
import categories from './categories/categories.reducer';
import sidebar from './sidebar/sidebar.reducer';

export default combineReducers({
  cart: cart,
  products: products,
  orders: orders,
  categories: categories,
  sidebar: sidebar,
});