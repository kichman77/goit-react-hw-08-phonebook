// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, loading } from "./contacts/contactsReducer";
import filter from "./filter/filterReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter,
    loading,
  },
});
// const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default store;
