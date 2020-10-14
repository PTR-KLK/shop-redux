import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_CATEGORIES } from "./modules/categories/categories.action";
import Nav from "./components/nav/nav.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import ProductsTemplate from "./templates/productsTemplate";
import YourOrders from "./pages/YourOrders";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
`;

function App({ actionFetchCategories }) {
  useEffect(() => {
    actionFetchCategories();
  }, [actionFetchCategories]);

  return (
    <main>
      <GlobalStyle />
      <Router>
        <Nav />
        <Sidebar />
        <Switch>
          <Route exact path="/simple-shop/cart/order" component={Order} />
          <Route exact path="/simple-shop/cart" component={Cart} />
          <Route exact path="/simple-shop/orders" component={YourOrders} />
          <Route exact path="/simple-shop" component={Home} />
          <Route
            exact
            path="/simple-shop/:categoryId"
            component={ProductsTemplate}
          />
        </Switch>
      </Router>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actionFetchCategories: () => dispatch(ACTION_FETCH_INIT_CATEGORIES()),
});

export default connect(null, mapDispatchToProps)(App);
