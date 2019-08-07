import userService from "./userService";
import jwtDecode from "jwt-decode";

export const TOKEN_KEY = "@orbita-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const loggedUser = async () => {
  if (isAuthenticated()) {
    return userService.getLoggedUser().then(user => {
      return Promise.resolve({
        user: jwtDecode(getToken()),
        username: user.email,
      });
    });
  } else {
    return Promise.resolve({ user: null, username: null });
  }
};
