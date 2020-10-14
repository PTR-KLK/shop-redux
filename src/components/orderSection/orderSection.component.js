import React, { useState } from "react";
import { connect } from "react-redux";
import {
  selectCart,
  selectCartTotal,
  selectCartLength,
} from "../../modules/cart/cart.selector";
import { selectOrders } from "../../modules/orders/orders.selector";
import { ACTION_PLACE_ORDER } from "../../modules/orders/orders.action";
import { ACTION_CLEAR_CART } from "../../modules/cart/cart.action";
import { Container, Title, Input } from "./orderSection.styles";
import { Link } from "react-router-dom";
import Banner from "../banner/banner.component";

function OrderSection({
  cart,
  cartTotal,
  cartLength,
  actionPlaceOrder,
  actionClearCart,
  orders,
}) {
  const [nameInput, setName] = useState("");
  const [lastNameInput, setLastName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actionPlaceOrder(nameInput, lastNameInput, cart);
    actionClearCart();
    setName("");
    setLastName("");
  };

  return cart.length !== 0 ? (
    <Container>
      <Title>
        You want to buy {cartLength} {cartLength === 1 ? "product" : "products"}{" "}
        for {cartTotal} zł
      </Title>
      <form onSubmit={handleSubmit}>
        <Input
          value={nameInput}
          onChange={handleName}
          placeholder="Your name..."
        />
        <Input
          value={lastNameInput}
          onChange={handleLastName}
          placeholder="Your last name..."
        />
        <Input type="submit" value="Buy items" />
      </form>
    </Container>
  ) : orders.length !== 0 ? (
    <Banner>
      <Title>Thank you for ordering items in our shop</Title>
      <Link to="/simple-shop/">Go to homepage</Link>
      <Link to="/simple-shop/orders">Check your orders</Link>
    </Banner>
  ) : (
    <Banner>
      <Title>There's nothing to order</Title>
      <Link to="/simple-shop/">Go to homepage</Link>
    </Banner>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
  orders: selectOrders(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionPlaceOrder: (name, lastName, items) =>
    dispatch(ACTION_PLACE_ORDER(name, lastName, items)),
  actionClearCart: () => dispatch(ACTION_CLEAR_CART()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSection);
