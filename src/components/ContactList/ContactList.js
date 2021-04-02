import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors, operations } from "../../redux/contacts";

const ContactList = ({ showContacts, handleDelete }) => {
  return (
    <>
      {showContacts && (
        <ul className={styles.list}>
          {showContacts.map((el) => {
            return (
              <li
                onClick={() => {
                  handleDelete(el.id);
                }}
                key={el.id}
              >
                {el.name}
                <span>{el.number}</span>
                <button className={styles.btn} type="button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    showContacts: selectors.getFilteredContacts(store),
  };
};
const mapDispatchToProps = {
  handleDelete: operations.deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  showContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
