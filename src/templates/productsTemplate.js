import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_PRODUCTS } from "../modules/products/products.action";
import { selectProducts } from "../modules/products/products.selector";
import ProductList from "../components/productList/productList.component";

function Products(props) {
  const { actionFetchProducts, products } = props;

  useEffect(() => {
    actionFetchProducts(`products/category/${props.match.params.categoryId}`);
  }, [actionFetchProducts, props.match.params.categoryId]);

  return <ProductList list={products} />;
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchProducts: (endpoint) =>
    dispatch(ACTION_FETCH_INIT_PRODUCTS(endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
