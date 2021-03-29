import {
  userSignUpRequest,
  userSignUpSuccess,
  userSingUpError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./actions";
import axios from "axios";

axios.defaults.baseURL = `
https://goit-phonebook-api.herokuapp.com
`;

const userToken = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = "";
  },
};

const signup = (credentials) => (dispatch) => {
  dispatch(userSignUpRequest());
  axios
    .post("/users/signup", credentials)
    .then((response) => {
      userToken.set(response.data.token);
      dispatch(userSignUpSuccess(response.data));
    })
    .catch((error) => dispatch(userSingUpError(error.message)));
};

const login = (credentials) => (dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("/users/login", credentials)
    .then((response) => {
      userToken.set(response.data.token);
      dispatch(userLoginSuccess(response.data));
    })
    .catch((error) => dispatch(userLoginError(error.message)));
};

const logout = () => (dispatch) => {
  dispatch(userLogoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      userToken.unset();
      dispatch(userLogoutSuccess());
    })
    .catch((error) => dispatch(userLogoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { userToken: persistedToken },
  } = getState();
  if (!persistedToken) return;
  dispatch(getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((response) => dispatch(getCurrentUserSuccess(response.data)))
    .catch((error) => dispatch(getCurrentUserError(error)));
};

export default { signup, login, logout, getCurrentUser };