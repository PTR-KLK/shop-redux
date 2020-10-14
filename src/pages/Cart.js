import React from "react";
import { connect } from "react-redux";
import { selectCart, selectCartLength } from "../modules/cart/cart.selector";
import ProductList from "../components/productList/productList.component";
import CartSection from "../components/cartSection/cartSection.component";

function YourCart({ cart, cartLength }) {
  return cartLength !== 0 ? (
    <section>
      <ProductList list={cart} />
      <CartSection />
    </section>
  ) : (
    <CartSection />
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(YourCart);
