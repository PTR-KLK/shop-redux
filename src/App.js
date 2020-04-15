import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LiContainer } from './App.styles';
import Nav from "./components/nav/nav.component";
import Shop from "./components/shop/shop.component";
import YourCart from "./components/yourCart/yourCart.component";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav>
          <LiContainer>
            <li>
              <Link className="liLink" to="/">My Shop App</Link>
            </li>
            <li>
              <Link className="liLink" to="/cart">Your Cart</Link>
            </li>
          </LiContainer>
        </Nav>
        <div>
          <Switch>
            <Route path="/cart">
              <YourCart />
            </Route>
            <Route path="/">
              <Shop />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
