import React from 'react';
import { connect } from 'react-redux';
import { selectCart } from '../../modules/cart/cart.selector';

import { CartContainer } from './cart.styles';

function Cart(props) {
  return (
    <CartContainer>
        Koszyk: {props.cart.reduce((total,element)=>{
          return total + element.price
        },0)}
    </CartContainer>
  );
}

const mapStateToProps = state => ({
  cart: selectCart(state),
});

export default connect(mapStateToProps, null)(Cart);
