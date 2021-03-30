import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectors } from "../../redux/user";

const PublicRoute = ({
  isAuth,
  restricted,
  component: Component,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({ isAuth: selectors.getAuth(state) });
export default connect(mapStateToProps)(PublicRoute);
