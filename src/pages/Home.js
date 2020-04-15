import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_PRODUCTS } from "../modules/products/products.action";
import { ACTION_ADD_ITEM } from "../modules/cart/cart.action";
import { selectProducts } from "../modules/products/products.selector";

import ProductList from "../components/productList/productList.component";

function Shop(props) {
  const { actionFetchProducts, actionAddItem, products } = props;

  useEffect(() => {
    actionFetchProducts();
  }, [actionFetchProducts]);

  const handleClick = (event) => {
    const item = products.find((e) => e.id === Number(event.target.id));
    actionAddItem(item);
  };

  return <ProductList list={products} handleClick={handleClick} />;
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchProducts: () => dispatch(ACTION_FETCH_INIT_PRODUCTS()),
  actionAddItem: (item) => dispatch(ACTION_ADD_ITEM(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);