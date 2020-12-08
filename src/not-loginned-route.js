import React from "react";
import { Profile } from "./profile";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const NotLoginnedRoute = (props) => {
  return (
    <Route
      render={() =>
        Cookies.get("usrId") ? (
          <Redirect to={{ pathname: "/profile" }} />
        ) : (
          props.children
        )
      }
    />
  );
};
