import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getMyContacts();
  }
  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}
// const mapStateToProps = (state) => {};
const mapDispatchToProps = {
  getMyContacts: operations.getContacts,
};
export default connect(null, mapDispatchToProps)(ContactsPage);
