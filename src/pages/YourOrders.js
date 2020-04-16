import React from "react";
import { connect } from "react-redux";
import { selectOrders } from "../modules/orders/orders.selector"
import ProductListMini from "../components/productListMini/productListMini.component";

function YourOrders({ orders }) {
  return (
    <>
      {orders.map((e, idx)=> {
          return (
            <ProductListMini key={idx} list={e.items}>
                <h3>Order no.{idx}</h3>
                <h3>{e.name + ' ' + e.lastName}</h3>
            </ProductListMini>
          )
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(YourOrders);