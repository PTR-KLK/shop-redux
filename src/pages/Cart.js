import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCart,
  selectCartTotal,
  selectCartLength,
} from "../modules/cart/cart.selector";
import ProductListMini from "../components/productListMini/productListMini.component";

function YourCart({ cart, cartTotal, cartLength }) {
  return (
    <>
      <ProductListMini list={cart}>
      <h3>
          {cartLength === 0
            ? "Cart is empty"
            : `You have ${cartLength} ${
                cartLength === 1
                  ? "product"
                  : "products"
              }
              for ${cartTotal} zł`}
        </h3>
      </ProductListMini>
      <Link to='/cart/order' > Order </Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCart(state),
  cartTotal: selectCartTotal(state),
  cartLength: selectCartLength(state),
});

export default connect(mapStateToProps, null)(YourCart);
