import React from 'react';
import { connect } from 'react-redux';
import { selectCartTotal } from '../../modules/cart/cart.selector';

import { CartContainer } from './cart.styles';

function Cart(props) {
  return (
    <CartContainer>
        Koszyk: {props.cartTotal}
    </CartContainer>
  );
}

const mapStateToProps = state => ({
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps, null)(Cart);
