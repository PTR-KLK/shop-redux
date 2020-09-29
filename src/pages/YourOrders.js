import React from "react";
import { connect } from "react-redux";
import { selectOrders } from "../modules/orders/orders.selector";
import ProductList from "../components/productList/productList.component";

function YourOrders({ orders }) {
  return (
    <>
      {orders.map((e, idx) => {
        return (
          <>
            <ProductList key={idx} list={e.items} />
            <h3>Order no.{idx}</h3>
            <h3>{e.name + " " + e.lastName}</h3>
          </>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(YourOrders);
