import React, { useState } from "react";
import { connect } from "react-redux";
import {
  selectCart,
  selectCartTotal,
  selectCartLength,
} from "../modules/cart/cart.selector";
import { ACTION_PLACE_ORDER } from "../modules/orders/orders.action";
import ProductListMini from "../components/productListMini/productListMini.component";

function Order({ cart, cartTotal, cartLength, actionPlaceOrder }) {
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
    actionPlaceOrder(nameInput,lastNameInput,cart);
    setName('');
    setLastName('');
  };

  return (
    <>
      <ProductListMini list={cart}>
        <h3>
          You want to buy {cartLength}{" "}
          {cartLength === 1 ? "product" : "products"} for {cartTotal} zł
        </h3>
        <form onSubmit={handleSubmit}>
          <input value={nameInput} onChange={handleName} placeholder="Your name..."/>
          <input value={lastNameInput} onChange={handleLastName} placeholder="Your last name..."/>
          <input type="submit" value="Buy items" />
        </form>
      </ProductListMini>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionPlaceOrder: (name,lastName,items) => dispatch(ACTION_PLACE_ORDER(name,lastName,items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
