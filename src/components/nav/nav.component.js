import React from "react";
import { NavContainer, StyledLink } from "./nav.styles";
import CartButton from "../cartButton/cartButton.component";

function Nav() {
  return (
    <NavContainer>
      <StyledLink to="/simple-shop/">Simple Shop</StyledLink>
      <CartButton />
    </NavContainer>
  );
}

export default Nav;
