import React from "react";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartLength,
} from "../../modules/cart/cart.selector";
import { ACTION_TOGGLE_SIDEBAR } from "../../modules/sidebar/sidebar.action";
import { Container, Menu, Hyperlink } from "./nav.styles";

function Nav({ cartLength, cartTotal, actionToggleSidebar }) {
  return (
    <Container>
      <Menu onClick={actionToggleSidebar}>Menu</Menu>
      <Hyperlink to="/simple-shop/">Simple Shop</Hyperlink>
      <Hyperlink to="/simple-shop/cart">
        ({cartLength}) Cart: {cartTotal}
      </Hyperlink>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionToggleSidebar: () => dispatch(ACTION_TOGGLE_SIDEBAR()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
