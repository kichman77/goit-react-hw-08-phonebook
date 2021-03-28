// const filterAction = (value) => {
//   return {
//     type: "FILTER_CONTACT",
//     payload: value,
//   };
// };

// export default { filterAction };

import { createAction } from "@reduxjs/toolkit";
const filterContacts = createAction("FILTER_CONTACTS");

export default filterContacts;
