import { createAction } from "@reduxjs/toolkit";

const userSignUpRequest = createAction("SIGNUP_REQUEST");
const userSignUpSuccess = createAction("SIGNUP_SUCCESS");
const userSingUpError = createAction("SIGNUP_ERROR");

const userLoginRequest = createAction("LOGIN_REQUEST");
const userLoginSuccess = createAction("LOGIN_SUCCESS");
const userLoginError = createAction("LOGIN_ERROR");

const userLogoutRequest = createAction("LOGOUT_REQUEST");
const userLogoutSuccess = createAction("LOGOUT_SUCCESS");
const userLogoutError = createAction("LOGOUT_ERROR");

const getCurrentUserRequest = createAction("CURRENT_USER_REQUEST");
const getCurrentUserSuccess = createAction("CURRENT_USER_SUCCESS");
const getCurrentUserError = createAction("CURRENT_USER_ERROR");

export default {
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
};
