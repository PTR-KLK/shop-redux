import React from "react";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartLength,
} from "../../modules/cart/cart.selector";
import { Container, Title, OrderLink } from "./cartSection.styles";

function CartSection({ cartTotal, cartLength }) {
  return (
    <Container>
      <Title>
        {cartLength === 0
          ? "Cart is empty"
          : `You have ${cartLength} ${cartLength === 1 ? "product" : "products"}
              for:`}
        <br />
        {cartLength === 0 ? null : `${cartTotal} zł`}
      </Title>
      <OrderLink disabled={cartLength === 0} to="/simple-shop/cart/order">Order Items</OrderLink>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(CartSection);
