import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import styles from "./Header.module.css";
import { selectors, operations } from "../../redux/user";
import UserMenu from "../UserMenu/UserMenu";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: red;
    &:hover {
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className={styles.container}>
            <Navbar.Brand>Phonebook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className={styles.link} to="/login">
                  Log in
                </NavLink>
                <NavLink className={styles.link} to="/signup">
                  Sign up
                </NavLink>
              </Nav>
              {false && (
                <>
                  <NavLink exact to="/contacts">
                    Contacts
                  </NavLink>
                  <UserMenu />
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuth: selectors.getAuth(state),
  email: selectors.getUserEmail(state),
});
const mapDispatchToProps = { onLogout: operations.onLogout };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
