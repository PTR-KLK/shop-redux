import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import YourOrders from "./pages/YourOrders";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/cart/order" component={Order} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={YourOrders} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
