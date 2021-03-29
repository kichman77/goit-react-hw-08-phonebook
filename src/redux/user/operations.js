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
