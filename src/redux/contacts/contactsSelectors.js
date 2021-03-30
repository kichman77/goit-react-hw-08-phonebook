import { createSelector } from "@reduxjs/toolkit";

const getLoading = ({ loading }) => loading;

const getContacts = ({ contacts }) => contacts;

const getFilter = ({ filter }) => filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
);

const getContactById = createSelector(
  [getContacts, (_, contactId) => contactId],
  (contacts, contactId) => contacts.find(({ id }) => id === contactId)
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactById,
};
