import React, { Component, Suspense } from "react";
import Header from "./components/Header/Header";
import { Switch } from "react-router";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { connect } from "react-redux";
import { operations } from "./redux/user";
import routes from "./routes";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Suspense fallback="Мы тоже хотим, чтобы все было легко и просто!!! Но......">
          <Switch>
            {routes.map((route) => {
              return route.private ? (
                <PrivateRoute key={route.id} {...route} />
              ) : (
                <PublicRoute
                  key={route.id}
                  restricted={route.restricted}
                  {...route}
                />
              );
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: operations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
