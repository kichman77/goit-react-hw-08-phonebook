// const contactReducer = (state = contacts, action) => {
//   switch (action.type) {
//     case "ADD_CONTACT":
//       console.log(state);
//       const addState = [...state, action.payload];
//       localStorage.setItem("contacts", JSON.stringify(addState));
//       return addState;
//     case "DELETE_CONTACT":
//       const deleteState = state.filter(
//         (contact) => contact.id !== action.payload.id
//       );
//       localStorage.setItem("contacts", JSON.stringify(deleteState));

//       return deleteState;

//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
// import contactAction from "../contacts/contactsAction";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from "./contactsAction";

// const contacts = JSON.parse(localStorage.getItem("contacts")) || [
//   { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
// ];

const addContact = (state, action) => {
  const addState = [...state, action.payload];
  // localStorage.setItem("contacts", JSON.stringify(addState));
  return addState;
};
const deleteContact = (state, action) => {
  const deleteState = state.filter((contact) => contact.id !== action.payload);
  // localStorage.setItem("contacts", JSON.stringify(deleteState));
  return deleteState;
};

const contactReducer = createReducer([], {
  // [contactAction.addContact]: addContact,
  // [contactAction.deleteContact]: deleteContact,
  [addContactSuccess]: addContact,
  [deleteContactSuccess]: deleteContact,
  [getContactsSuccess]: (state, action) => {
    return action.payload;
  },
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});
export { contactReducer, loading };
