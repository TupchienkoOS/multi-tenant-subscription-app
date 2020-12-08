import React from "react";
import { Profile } from "./profile";
import { Route, Redirect, useParams } from "react-router-dom";
import { users } from "./data/users";
import Login from "./login";

export const PrivateRoute = ({ ...rest }) => {
  return (
    <Route
      render={() =>
        rest.user ? (
          <Profile onLogOut={rest.onLogOut} user={rest.user} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
