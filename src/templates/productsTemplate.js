import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_PRODUCTS } from "../modules/products/products.action";
import { ACTION_FETCH_INIT_CATEGORIES } from "../modules/categories/categories.action";
import { selectProducts } from "../modules/products/products.selector";
import ProductList from "../components/productList/productList.component";
import Sidebar from "../components/sidebar/sidebar.component";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
  }
`

function Products(props) {
  const { actionFetchProducts, actionFetchCategories, products } = props;

  useEffect(() => {
    actionFetchProducts(`products/category/${props.match.params.categoryId}`);
    actionFetchCategories();
  }, [
    actionFetchProducts,
    actionFetchCategories,
    props.match.params.categoryId,
  ]);

  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <ProductList list={products} />
    </>
  );
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchProducts: (endpoint) =>
    dispatch(ACTION_FETCH_INIT_PRODUCTS(endpoint)),
  actionFetchCategories: () => dispatch(ACTION_FETCH_INIT_CATEGORIES()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
