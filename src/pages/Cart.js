import React from "react";
import { connect } from "react-redux";
import {
  selectCart,
} from "../modules/cart/cart.selector";
import ProductList from "../components/productList/productList.component";
import CartSection from "../components/cartSection/cartSection.component"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function YourCart({ cart }) {
  return (
    <>
      <GlobalStyle />
      <ProductList list={cart} />
      <CartSection />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
});

export default connect(mapStateToProps, null)(YourCart);
