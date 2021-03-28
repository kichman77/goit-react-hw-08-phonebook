// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "FILTER_CONTACT":
//       return action.payload;
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import filterContacts from "./filterAction";

const filterReducer = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});
export default filterReducer;
