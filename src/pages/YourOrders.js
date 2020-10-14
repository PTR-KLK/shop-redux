import React from "react";
import { connect } from "react-redux";
import { selectOrders } from "../modules/orders/orders.selector";
import ProductList from "../components/productList/productList.component";
import Banner from "../components/banner/banner.component";
import Tile from "../components/tile/tile.component";

function YourOrders({ orders }) {
  return orders.length !== 0 ? (
    <section>
      {orders.map((e, idx) => (
        <>
          <Tile>
            <p>Order no. {idx + 1}</p>
            <p>{e.name + " " + e.lastName}</p>
          </Tile>
          <ProductList key={idx} list={e.items} />
        </>
      ))}
    </section>
  ) : (
    <Banner>
      <p>No orders so far...</p>
    </Banner>
  );
}

const mapStateToProps = (state) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(YourOrders);
