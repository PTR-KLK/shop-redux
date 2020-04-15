import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_PRODUCTS } from "../modules/products/products.action";
import { selectProducts } from "../modules/products/products.selector";

import ProductList from "../components/productList/productList.component";

function Shop(props) {
  const { actionFetchProducts, products } = props;

  useEffect(() => {
    actionFetchProducts();
  }, [actionFetchProducts]);

  return <ProductList list={products} />;
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchProducts: () => dispatch(ACTION_FETCH_INIT_PRODUCTS()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);