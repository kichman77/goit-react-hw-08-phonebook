import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectors } from "../../redux/user";

const PrivateRoute = ({
  isAuth,
  component: Component,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        !isAuth ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({ isAuth: selectors.getAuth(state) });
export default connect(mapStateToProps)(PrivateRoute);
