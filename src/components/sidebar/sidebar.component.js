import React from "react";
import { connect } from "react-redux";
import {
  selectCategories,
  selectLoading,
  selectError,
} from "../../modules/categories/categories.selector";
import { Container, List, Title, StyledLink } from "./sidebar.style";

function Sidebar({ categories, loading, error }) {
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
        {loading ? (
          <li>Loading</li>
        ) : error ? (
          <li>Error</li>
        ) : (
          categories.map((e) => {
            return (
              <li key={e.key}>
                <StyledLink to={`/simple-shop/${e.key}`}>{e.name}</StyledLink>
              </li>
            );
          })
        )}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  loading: selectLoading(state),
  error: selectError(state),
});

export default connect(mapStateToProps, null)(Sidebar);
