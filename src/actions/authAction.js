import { logout } from "../services/auth";
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function logoutAction() {
  return dispatch => {
    logout();
    dispatch(setCurrentUser({}));
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
