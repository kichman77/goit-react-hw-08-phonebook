// const addContact = (contact) => {
//   return {
//     type: "ADD_CONTACT",
//     payload: { id: contact.id, name: contact.name, phone: contact.phone },
//   };
// };

// const deleteContact = (id) => {
//   return {
//     type: "DELETE_CONTACT",
//     payload: { id },
//   };
// };
// export default { addContact, deleteContact };

import { createAction } from "@reduxjs/toolkit";
// const addContact = createAction(actionTypes.ADD_CONTACT);
// const deleteContact = createAction(actionTypes.DELETE_CONTACT);

const addContactRequest = createAction("ADD_CONTACT_REQUEST");
const addContactSuccess = createAction("ADD_CONTACT_SUCCESS");
const addContactError = createAction("ADD_CONTACT_ERROR");

const deleteContactRequest = createAction("DELETE_CONTACT_REQUEST");
const deleteContactSuccess = createAction("DELETE_CONTACT_SUCCESS");
const deleteContactError = createAction("DELETE_CONTACT_ERROR");

const getContactsRequest = createAction("GET_CONTACTS_REQUEST");
const getContactsSuccess = createAction("GET_CONTACTS_SUCCESS");
const getContactsError = createAction("GET_CONTACTS_ERROR");

// export default { addContact, deleteContact };
export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
};
