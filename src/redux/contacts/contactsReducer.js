import { createReducer } from "@reduxjs/toolkit";
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

const addContact = (state, { payload }) => {
  return [...state, payload];
};
const deleteContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const contactReducer = createReducer([], {
  [addContactSuccess]: addContact,
  [deleteContactSuccess]: deleteContact,
  [getContactsSuccess]: (state, { payload }) => payload,
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
