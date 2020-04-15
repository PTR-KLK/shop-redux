import React from "react";
import {
  ProductContainer,
  ProductDescription,
  ProductImage,
} from "./product.styles";

function Product(props) {
  return (
    <ProductContainer>
      <ProductImage src={props.image} alt={props.title} />
      <ProductDescription>
        <h3>{props.title}</h3>
        <p>Category: {props.category}</p>
        <p>{props.description}</p>
        <p>Price: {props.price}</p>
        <button id={props.id} onClick={props.handleClick}>Buy</button>
      </ProductDescription>
    </ProductContainer>
  );
}

export default Product;
