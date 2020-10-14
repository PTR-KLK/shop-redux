import React from "react";
import { connect } from "react-redux";
import {
  selectCategories,
  selectLoading,
  selectError,
} from "../../modules/categories/categories.selector";
import { selectSidebarVisible } from "../../modules/sidebar/sidebar.selector";
import { Container, List, Title, Hyperlink } from "./sidebar.style";

function Sidebar({ categories, loading, error, sidebarVisible }) {
  return (
    <Container visible={sidebarVisible}>
      <List>
        <Title>Menu</Title>
        <li>
          <Hyperlink to="/simple-shop/">Home</Hyperlink>
        </li>
        <li>
          <Hyperlink to="/simple-shop/orders">Orders</Hyperlink>
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
                <Hyperlink to={`/simple-shop/${e.key}`}>{e.name}</Hyperlink>
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
  sidebarVisible: selectSidebarVisible(state),
});

export default connect(mapStateToProps, null)(Sidebar);
