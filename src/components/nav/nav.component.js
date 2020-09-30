import React from "react";
import { NavContainer, MenuContainer, StyledLink } from "./nav.styles";
import CartButton from "../cartButton/cartButton.component";

function Nav() {
  return (
    <NavContainer>
      <MenuContainer>
        <li>
          <StyledLink to="/simple-shop/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/simple-shop/orders">
            Orders
          </StyledLink>
        </li>
      </MenuContainer>
      <CartButton />
    </NavContainer>
  );
}

export default Nav;
