import React from "react";
import { ProductListContainer, Header } from "./productList.styles";
import Product from "../product/product.component";

function ProductList({ list, no, name, lastName }) {
  return (
    <ProductListContainer>
      {!list.length && <h1>Loading...</h1>}
      {name && (
        <Header>
          <h3>Order no. {no + 1}</h3>
          <p>{name + " " + lastName}</p>
        </Header>
      )}
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
