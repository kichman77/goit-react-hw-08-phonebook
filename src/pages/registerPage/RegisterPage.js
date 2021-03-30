import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { operations, selectors } from "../../redux/user";
import Notification from "../../components/Notification/Notification";
import styles from "./RegisterPage.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    const { onRegister } = this.props;
    e.preventDefault();
    const user = {
      id: uuid(),
      ...this.state,
    };
    onRegister(user);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { name, email, password } = this.state;
    const { error } = this.props;
    return (
      <>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={name}
              />
            </Form.Group>
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
              register
            </Button>
            {error && <Notification msg="something went wrong, try agan " />}
          </Form>
        </Container>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ error: selectors.getUserError(state) });

const mapDispatchToProps = {
  onRegister: operations.signup(),
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
