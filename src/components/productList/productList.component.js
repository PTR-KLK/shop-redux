import React from "react";
import { connect } from "react-redux";
import Product from "../product/product.component";
import Banner from "../banner/banner.component";
import {
  selectLoading,
  selectError,
} from "../../modules/products/products.selector";

function ProductList({ list, loading, error }) {
  return (
    <>
      {loading ? (
        <Banner>
          <p>Loading items...</p>
        </Banner>
      ) : error ? (
        <Banner>
          <p>Something gone wrong...</p>
        </Banner>
      ) : (
        <section>
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
        </section>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: selectLoading(state),
  error: selectError(state),
});

export default connect(mapStateToProps, null)(ProductList);
