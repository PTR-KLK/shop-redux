// import { CART_ACTION_TYPES } from './cart.action';

// const INITIAL_STATE = {
//     total: 0,
//     products: [],
//   };

//   export default (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//       case CART_ACTION_TYPES.ADD_ITEM:
//         return state = {
//           ...state,
//           counter: state.counter + 20
//         };
//       case CART_ACTION_TYPES.REMOVE_ITEM:
//         return state = {
//           ...state,
//           counter: state.counter - 20
//         };
//       case CART_ACTION_TYPES.EMPTY_CART:
//         return state = {
//           ...state,
//           counter: 0
//         };
//       case CART_ACTION_TYPES.CHANGE_CHANGE_CART:
//         return state = {
//           ...state,
//           counter: action.value
//         };
//       default:
//         return state;
//     }
//   }