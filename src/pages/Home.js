import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTION_FETCH_INIT_CATEGORIES } from "../modules/categories/categories.action";
import Sidebar from "../components/sidebar/sidebar.component";
import Banner from "../components/banner/banner.component";

function Shop(props) {
  const { actionFetchCategories } = props;

  useEffect(() => {
    actionFetchCategories();
  }, [actionFetchCategories]);

  return (
    <>
      <Sidebar />
      <Banner>
        <p>Welcome to my Shop!</p>
      </Banner>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actionFetchCategories: () => dispatch(ACTION_FETCH_INIT_CATEGORIES()),
});

export default connect(null, mapDispatchToProps)(Shop);
