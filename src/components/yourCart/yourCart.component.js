import React from 'react';
import { connect } from 'react-redux';
import { selectCart } from '../../modules/cart/cart.selector';
import { ShopContainer } from './shop.styles';
import Product from '../product/product.component';

function YourCart(props) {

  const { cart } = props;

  return (
    <ShopContainer>
      {cart.map((e) => {
        return (
          <Product
            key={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            price={e.price}
            image={e.image}
            id={e.id}
          />
        );
      })}
    </ShopContainer>
  );
}

const mapStateToProps = state => ({
    cart: selectCart(state),
});

export default connect(mapStateToProps, null)(YourCart);
