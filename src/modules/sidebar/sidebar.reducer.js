import { SIDEBAR_ACTION_TYPES } from "./sidebar.action";

const INITIAL_STATE = {
  visible: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIDEBAR_ACTION_TYPES.TOGGLE_SIDEBAR:
      return (state = {
        visible: !state.visible,
      });
    default:
      return state;
  }
};
