import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_CATEGORIES } from "../modules/categories/categories.action";
import Sidebar from "../components/sidebar/sidebar.component";
import Banner from "../components/banner/banner.component";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
    justify-content: center;
  }
`;

function Shop(props) {
  const { actionFetchCategories } = props;

  useEffect(() => {
    actionFetchCategories();
  }, [actionFetchCategories]);

  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Banner>
        <h2>Welcome to my Shop!</h2>
      </Banner>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actionFetchCategories: () => dispatch(ACTION_FETCH_INIT_CATEGORIES()),
});

export default connect(null, mapDispatchToProps)(Shop);
