import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Profile from "./profile";

export const PrivateRoute = () => {
  return (
    <Route
      render={(props) =>
        Cookies.get("usrId") ? (
          <Profile to={{ pathname: "/profile" }} location={props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
