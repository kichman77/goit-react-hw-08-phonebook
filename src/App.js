import React, { Component, Suspense } from "react";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { connect } from "react-redux";
import { selectors, operations } from "./redux/contacts";
import routes from "./routes";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <>
        {isLoading && (
          <h1>Мы тоже хотим, чтобы все было легко и просто!!! Но......</h1>
        )}
        <Header />
        <Suspense fallback="wait">
          <Switch>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Switch>
        </Suspense>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: selectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  getContacts: operations.getContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
