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

// console.log(axios);

axios.defaults.baseURL = "http://localhost:4040/";

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("contacts", contact)
    .then((response) => response.data)
    .then((data) => {
      // console.log(data);
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

const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());
  axios
    .get("contacts")
    .then((response) => response.data)
    .then((data) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export default { addContact, deleteContact, getContacts };
