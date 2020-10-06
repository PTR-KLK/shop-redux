import React from "react";
import { connect } from "react-redux";
import { selectCategories } from "../../modules/categories/categories.selector";
import { Container, List, Title, StyledLink } from "./sidebar.style";

function Sidebar({ categories }) {
  return (
    <Container>
      <List>
        <Title>Menu</Title>
        <li>
          <StyledLink to="/simple-shop/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/simple-shop/orders">Orders</StyledLink>
        </li>
      </List>
      <List>
        <Title>Categories</Title>
        {categories.map((e) => {
          return (
            <li key={e.key}>
              <StyledLink to={`/simple-shop/${e.key}`}>{e.name}</StyledLink>
            </li>
          );
        })}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
});

export default connect(mapStateToProps, null)(Sidebar);
