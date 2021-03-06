import React from "react";
import { connect } from "react-redux";
import { Button, Container } from "react-bootstrap";
import styles from "./UserMenu.module.css";
import { selectors, operations } from "../../redux/user";

const UserMenu = ({ onLogout, userName }) => {
  return (
    <Container className="d-flex justify-content-end">
      <div className={styles.container}>
        <p className={styles.text}>
          Welcome, <span>{userName}</span>
        </p>
      </div>
      <Button onClick={onLogout} variant="primary" className="mr-2">
        Log out
      </Button>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  userName: selectors.getUserName(state),
});
const mapDispatchToProps = {
  onLogout: operations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
