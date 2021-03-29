import { createReducer, combineReducers } from "@reduxjs/toolkit";
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

const initState = { id: "", name: "", email: "", password: "" };

const userReducer = createReducer(initState, {
  [userSignUpSuccess]: (_, action) => {
    return action.payload.user;
  },
  [userLoginSuccess]: (_, action) => {
    return action.payload.user;
  },
  [userLogoutSuccess]: () => {
    return initState;
  },
  [getCurrentUserSuccess]: (_, action) => {
    return action.payload;
  },
});

const tokenReduser = createReducer(null, {
  [userSignUpSuccess]: (_, action) => {
    return action.payload.token;
  },
  [userLoginSuccess]: (_, action) => {
    return action.payload.token;
  },
  [userLogoutSuccess]: (_, action) => null,
});

const errorReduser = createReducer(null, {
  [userSingUpError]: (_, action) => {
    return action.payload;
  },
  [userLoginError]: (_, action) => {
    return action.payload;
  },
  [userLogoutError]: (_, action) => {
    return action.payload;
  },
  [userLogoutSuccess]: () => null,
  [getCurrentUserError]: (_, action) => {
    return action.payload;
  },
});

export default combineReducers({
  userReducer,
  tokenReduser,
  errorReduser,
});
