import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => {
  return state.loading;
};

const getContacts = (state) => {
  return state.contacts;
};

const getFilter = (state) => {
  return state.filter;
};

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter);
    });
  }
);

const getContactById = createSelector(
  [
    getContacts,
    (_, contactId) => {
      return contactId;
    },
  ],
  (contacts, contactId) => {
    return contacts.find((contact) => {
      return contact.id === contactId;
    });
  }
);
export default {
  getLoading,
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactById,
};
