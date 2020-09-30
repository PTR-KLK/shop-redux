import React from "react";
import { connect } from "react-redux";
import {
  selectCart,
} from "../modules/cart/cart.selector";
import ProductList from "../components/productList/productList.component";
import CartSection from "../components/cartSection/cartSection.component"

function YourCart({ cart }) {
  return (
    <>
      <ProductList list={cart} />
      <CartSection />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
});

export default connect(mapStateToProps, null)(YourCart);
