import React from 'react';
import { ProductListMiniContainer } from './productListMini.styles';
import Product from '../product/product.component';

function ProductListMini({children, list}) {

  return (
    <ProductListMiniContainer>
      {children}
      {list.map((e) => {
        return (
          <Product
            key={e.id}
            title={e.title}
            price={e.price}
            image={e.image}
            id={e.id}
            cartImage={true}
            cartDescription={true}
          />
        );
      })}
    </ProductListMiniContainer>
  );
}

export default ProductListMini;
