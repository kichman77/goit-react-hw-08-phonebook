import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("ADD_CONTACT_REQUEST");
const addContactSuccess = createAction("ADD_CONTACT_SUCCESS");
const addContactError = createAction("ADD_CONTACT_ERROR");

const deleteContactRequest = createAction("DELETE_CONTACT_REQUEST");
const deleteContactSuccess = createAction("DELETE_CONTACT_SUCCESS");
const deleteContactError = createAction("DELETE_CONTACT_ERROR");

const getContactsRequest = createAction("GET_CONTACTS_REQUEST");
const getContactsSuccess = createAction("GET_CONTACTS_SUCCESS");
const getContactsError = createAction("GET_CONTACTS_ERROR");

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
