import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Profile from "./profile";

export const PrivateRoute = ({ ...rest }) => {
  return (
    <Route
      render={(props) =>
        Cookies.get("usrId") ? (
          <Profile to={{ pathname: "/profile" }} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
