import { createReducer } from "@reduxjs/toolkit";
import filterContacts from "./filterAction";

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});
export default filterReducer;
