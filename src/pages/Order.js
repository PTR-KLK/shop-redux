import React from "react";
import { connect } from "react-redux";
import { selectCart } from "../modules/cart/cart.selector";
import ProductList from "../components/productList/productList.component";
import OrderSection from "../components/orderSection/orderSection.component";

function Order({ cart }) {
  return (
    <>
      <ProductList list={cart} />
      <OrderSection />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
});

export default connect(mapStateToProps, null)(Order);
