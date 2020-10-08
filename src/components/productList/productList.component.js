import React from "react";
import { connect } from "react-redux";
import { ProductListContainer, Header } from "./productList.styles";
import Product from "../product/product.component";
import {
  selectLoading,
  selectError,
} from "../../modules/products/products.selector";
import Banner from "../banner/banner.component";

function ProductList({ list, no, name, lastName, loading, error }) {
  return (
    <ProductListContainer>
      {name ? (
        <Header>
          <h3>Order no. {no + 1}</h3>
          <p>{name + " " + lastName}</p>
        </Header>
      ) : null}
      {loading ? (
        <Banner>
          <h2>Loading items...</h2>
        </Banner>
      ) : error ? (
        <Banner>
          <h2>Something gone wrong</h2>
        </Banner>
      ) : (
        list.map((e) => {
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
        })
      )}
    </ProductListContainer>
  );
}

const mapStateToProps = (state) => ({
  loading: selectLoading(state),
  error: selectError(state),
});

export default connect(mapStateToProps, null)(ProductList);
