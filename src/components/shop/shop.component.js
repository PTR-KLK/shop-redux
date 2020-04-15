import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ACTION_FETCH_INIT_LIST } from '../../modules/productList/productList.action';
import { selectProductList } from '../../modules/productList/productList.selector';

import { ShopContainer } from './shop.styles';
import Product from '../product/product.component';

function Shop(props) {

  useEffect(()=>{
    props.actionFetchList();
  },[]);


  return (
    <ShopContainer>
      {props.productList.map((e) => {
        return (
          <Product
            key={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            price={e.price}
            image={e.image}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
