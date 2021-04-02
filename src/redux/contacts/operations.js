import axios from "axios";
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

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("contacts", { name, number })
    .then(({ data }) => {
      console.log(data);
      data = dispatch(addContactSuccess(data));
      return data;
    })
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

const getContacts = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getContactsRequest());
  axios.defaults.headers.common.Authorization = `Bearer ${state.auth.token}`;
  axios
    .get("contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export default { addContact, deleteContact, getContacts };
