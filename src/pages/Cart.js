import React from "react";
import { connect } from "react-redux";
import { selectCart, selectCartLength } from "../modules/cart/cart.selector";
import ProductList from "../components/productList/productList.component";
import CartSection from "../components/cartSection/cartSection.component";

function YourCart({ cart, cartLength }) {
  return (
    <section>
      {cartLength !== 0 ? <ProductList list={cart} /> : null}
      <CartSection />
    </section>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(YourCart);
