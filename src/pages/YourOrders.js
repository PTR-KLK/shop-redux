import React from "react";
import { connect } from "react-redux";
import { selectOrders } from "../modules/orders/orders.selector";
import ProductList from "../components/productList/productList.component";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function YourOrders({ orders }) {
  return (
    <>
      <GlobalStyle />
      {orders.map((e, idx) => {
        return (
          <ProductList
            key={idx}
            list={e.items}
            no={idx}
            name={e.name}
            lastName={e.lastName}
          />
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(YourOrders);
