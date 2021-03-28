import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors } from "../../redux/contacts";
import filterContacts from "../../redux/filter/filterAction";

const Filter = ({ filterContact, filter }) => {
  return (
    <input
      value={filter}
      className={styles.input}
      onChange={(event) => {
        return filterContact(event.target.value);
      }}
      placeholder="Find contacts by name"
      name="filter"
      type="text"
    />
  );
};
const mapStateToProps = (state) => {
  return { filter: selectors.getFilter(state) };
};
const mapDispatchToProps = { filterContact: filterContacts };
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
