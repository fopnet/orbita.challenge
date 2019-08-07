import { SET_CURRENT_USER } from "../actions/authAction";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  username: ""
};

const reducer = (state = initialState, action = {}) => {
  // console.log("default resolver ", action);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        username: action.username
      };
    default:
      return state;
  }
};

export default reducer;