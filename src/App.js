import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import ProductsTemplate from "./templates/productsTemplate";
import YourOrders from "./pages/YourOrders";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  main {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
`

function App() {
  return (
    <main>
      <GlobalStyle />
      <Router>
        <Nav />
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

export default App;
