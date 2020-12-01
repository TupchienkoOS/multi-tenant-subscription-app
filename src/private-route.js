import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, user }) {
  return (
    <Route
      render={() =>
        user ? children : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
}
