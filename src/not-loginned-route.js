import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const NotLoginnedRoute = (props) => {
  const userId = Cookies.get("usrId");

  const previousLocation = () => {
    console.log("notloginnedroute");
    return typeof props.location.state != "undefined"
      ? props.location.state.from.pathname
      : "/profile";
  };
  return (
    <Route
      render={() =>
        userId ? (
          <Redirect
            to={{
              pathname: previousLocation(),
            }}
          />
        ) : (
          props.children
        )
      }
    />
  );
};
