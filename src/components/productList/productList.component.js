import React from 'react';
import { ProductListContainer } from './productList.styles';
import Product from '../product/product.component';

function ProductList({list}) {

  return (
    <ProductListContainer>
      {list.map((e) => {
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
    </ProductListContainer>
  );
}

export default ProductList;
