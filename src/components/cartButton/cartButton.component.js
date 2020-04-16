import React from 'react';
import { connect } from 'react-redux';
import { selectCartTotal, selectCartLength } from '../../modules/cart/cart.selector';

import { CartButtonContainer } from './cartButton.styles';

function CartButton(props) {
  return (
    <CartButtonContainer to="/cart">
        ({props.cartLength})
        Cart: {props.cartTotal}
    </CartButtonContainer>
  );
}

const mapStateToProps = state => ({
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(CartButton);
