import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { operations, selectors } from "../../redux/user";
import Notification from "../../components/Notification/Notification";
import styles from "./LoginPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    const { onLogin } = this.props;
    e.preventDefault();
    const user = {
      id: uuid(),
      ...this.state,
    };
    onLogin(user);
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    const { error } = this.props;
    return (
      <>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              log in
            </Button>
            {typeof error === "string" && <Notification msg="something went wrong, try agan " />}
          </Form>
        </Container>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ error: selectors.getUserError(state) });

const mapDispatchToProps = {
  onLogin: operations.login(),
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
