import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors, operations } from "../../redux/contacts";
import Notification from "../Notification/Notification";

class ContactForm extends Component {
  static propTypes = { addContact: PropTypes.func.isRequired };
  state = {
    name: "",
    phone: "",
    isExist: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone } = this.state;
    const { contacts, addContact } = this.props;
    const contact = {
      name,
      number: phone,
    };
    const condition = contacts.find((elem) => {
      // console.log(elem.name);
      return elem.name === contact.name;
    });

    if (condition) {
      this.setState({ isExist: true });
      setTimeout(() => this.setState({ isExist: false }), 2000);
      return;
    }
    addContact(contact);
    this.setState({ name: "", phone: "" });
  };

  render() {
    const { name, phone, isExist } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <>
        {isExist && <Notification msg="contact already exist" />}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="name"
            name="name"
            type="text"
            value={name}
            required
          />
          <input
            onChange={handleChange}
            placeholder="phone number"
            name="phone"
            type="tel"
            value={phone}
            required
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return { contacts: selectors.getContacts(store) };
};
const mapDispatchToProps = { addContact: operations.addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
