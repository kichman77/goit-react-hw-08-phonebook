import React, { Component } from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors } from "../../redux/contacts";
import filterContacts from "../../redux/filter/filterAction";

class Filter extends Component {
  handleChange = (e) => {
    const { filterContact } = this.props;
    filterContact(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    e.target.filter.value = "";
  };

  render() {
    const { filter } = this.props;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={filter}
          className={styles.input}
          onChange={handleChange}
          placeholder="Find contacts by name"
          name="filter"
          type="text"
        />
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { filter: selectors.getFilter(state) };
};
const mapDispatchToProps = { filterContact: filterContacts };
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
