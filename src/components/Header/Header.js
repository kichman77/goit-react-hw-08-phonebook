import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import styles from "./Header.module.css";

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
          <Container>
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
              {true && (
                <>
                  <div className={styles.container}>
                    <img src="" alt="avatar" width="32" className={styles.avatar} />
                  </div>
                  <Button variant="primary" className="mr-2">
                    Log out
                  </Button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};

export default Header;
