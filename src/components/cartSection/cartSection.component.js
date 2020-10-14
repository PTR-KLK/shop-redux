import React from "react";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartLength,
} from "../../modules/cart/cart.selector";
import { Container, Title, OrderLink } from "./cartSection.styles";
import Banner from "../banner/banner.component";

function CartSection({ cartTotal, cartLength }) {
  return cartLength !== 0 ? (
    <Container>
      <Title>
        You have {cartLength} {cartLength === 1 ? "product" : "products"}
        for:
        <br />
        {cartTotal} zł
      </Title>
      <OrderLink disabled={cartLength === 0} to="/simple-shop/cart/order">
        Order Items
      </OrderLink>
    </Container>
  ) : (
    <Banner>
      <p>Cart is empty</p>
    </Banner>
  );
}

const mapStateToProps = (state) => ({
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(CartSection);
