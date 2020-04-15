import React from 'react';
import { NavContainer } from './nav.styles';
import Cart from '../cart/cart.component'

function Nav(props) {
  return (
    <NavContainer>
        {props.children}
        <Cart />
    </NavContainer>
  );
}

export default Nav;
