import axios from "axios";
import actions from "./actions";
// console.log(actions);
const {
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
} = actions;
// console.log(userSignUpRequest);
axios.defaults.baseURL = `
https://goit-phonebook-api.herokuapp.com
`;

const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signup = (credentials) => (dispatch) => {
  // console.log(dispatch);
  dispatch(userSignUpRequest());
  axios
    .post("/users/signup", credentials)
    .then(({ data }) => {
      userToken.set(data.token);
      // console.log(response.data.token);
      dispatch(userSignUpSuccess(data));
    })
    .catch((error) => dispatch(userSingUpError(error.message)));
};

const login = (credentials) => (dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      userToken.set(data.token);
      dispatch(userLoginSuccess(data));
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
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  userToken.set(persistedToken);
  dispatch(getCurrentUserRequest());
  axios
    .get("/users/current")
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch((error) => dispatch(getCurrentUserError(error)));
};

export default { signup, login, logout, getCurrentUser };
