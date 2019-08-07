import { SET_CURRENT_USER } from "../actions/authAction";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action = {}) => {
  // console.log("default resolver ", state);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};
