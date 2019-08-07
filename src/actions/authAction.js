import jwtDecode from "jwt-decode";
import api from "../services/api";
import { login, logout } from "../services/auth";
import history from "../history";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function logoutAction() {
  return dispatch => {
    return {
      logoutAction: () => {
        logout();
        // dispatch(push(url));
        console.log("logout executed.1");
        dispatch(setCurrentUser({}));
        console.log("logout executed.2");
        return Promise.resolve(true);
      },
      changeUrlAction: url => {
        // dispatch(push(url));
        setTimeout(() => history.push(url), 1000);
        console.log("push(url) dispatched", url);
      },
    };
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function loginAction(email, password) {
  return dispatch => {
    const query = {
      query: `mutation  {
          login(password: "${password}", email: "${email}") {
            token
          }
      }`,
    };

    return api.post("/", query).then(res => {
      const token = res.data.data.login.token;
      login(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}
