import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";
const {
  userSignUpSuccess,
  userSingUpError,
  userLoginSuccess,
  userLoginError,
  userLogoutSuccess,
  userLogoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions;
const initState = { name: null, email: null };

const userReducer = createReducer(initState, {
  [userSignUpSuccess]: (_, { payload }) => payload.user,

  [userLoginSuccess]: (_, { payload }) => payload.user,
  [userLogoutSuccess]: () => initState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(null, {
  [userSignUpSuccess]: (_, { payload }) => payload.token,
  [userLoginSuccess]: (_, { payload }) => payload.token,
  [userLogoutSuccess]: () => null,
});

const errorReducer = createReducer(null, {
  [userSingUpError]: (_, { payload }) => payload,
  [userLoginError]: (_, { payload }) => payload,
  [userLogoutError]: (_, { payload }) => payload,
  [userLogoutSuccess]: () => null,
  [getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
