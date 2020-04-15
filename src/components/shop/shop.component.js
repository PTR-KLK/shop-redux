import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ACTION_FETCH_INIT_LIST } from '../../modules/productList/productList.action';
import { ACTION_ADD_ITEM } from '../../modules/cart/cart.action';
import { selectProductList } from '../../modules/productList/productList.selector';

import { ShopContainer } from './shop.styles';
import Product from '../product/product.component';

function Shop(props) {

  const { actionFetchList, actionAddItem, productList } = props;

  useEffect(()=>{
    actionFetchList();
  },[actionFetchList]);

  const handleClick = (event) => {
    const price = productList.find(e=>e.id === Number(event.target.id)).price;
    actionAddItem(price);
  }

  return (
    <ShopContainer>
      {productList.map((e) => {
        return (
          <Product
            key={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            price={e.price}
            image={e.image}
            id={e.id}
            handleClick={handleClick}
          />
        );
      })}
    </ShopContainer>
  );
}

const mapStateToProps = state => ({
  productList: selectProductList(state),
});

const mapDispatchToProps = dispatch => ({
  actionFetchList: () => dispatch(ACTION_FETCH_INIT_LIST()),
  actionAddItem: (itemPrice) => dispatch(ACTION_ADD_ITEM(itemPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
