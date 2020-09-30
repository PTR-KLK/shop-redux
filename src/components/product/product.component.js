import React from "react";
import { connect } from "react-redux";
import {
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductTitle,
  Price,
  Button,
} from "./product.styles";
import { ACTION_ADD_ITEM, ACTION_REMOVE_ITEM } from "../../modules/cart/cart.action";
import { selectProducts } from "../../modules/products/products.selector";
import { selectCartIds } from "../../modules/cart/cart.selector";

function Product(props) {
  const handleAdd = (event) => {
    const item = props.products.find(
      (e) => e.id === Number(event.target.id)
    );
    props.actionAddItem(item);
  };

  const handleRemove = (event) => {
    props.actionRemoveItem(Number(event.target.id));
  };

  return (
    <ProductContainer>
      <ProductImage src={props.image} alt={props.title} />
      <ProductDescription>
        <ProductTitle>{props.title}</ProductTitle>
        <p>Category: {props.category}</p>
        <p>{props.description}</p>

        <Price>Price: {props.price}</Price>
        {props.cartItems.includes(props.id) ? (
          <Button danger id={props.id} onClick={handleRemove}>
            Remove from Cart
          </Button>
        ) : (
          <Button id={props.id} onClick={handleAdd}>
            Add to Cart
          </Button>
        )}
      </ProductDescription>
    </ProductContainer>
  );
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  cartItems: selectCartIds(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionAddItem: (item) => dispatch(ACTION_ADD_ITEM(item)),
  actionRemoveItem: (id) => dispatch(ACTION_REMOVE_ITEM(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
