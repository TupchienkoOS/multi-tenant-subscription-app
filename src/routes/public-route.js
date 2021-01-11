import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const PublicRoute = (props) => {
  const userId = Cookies.get("usrId");
  const compId = Cookies.get("compId");
  const previousLocation = () => {
    console.log("notloginnedroute");
    console.log(props);
    return typeof props.location.state != "undefined" &&
      props.location.state.from.pathname !== "/"
      ? props.location.state.from.pathname
      : `/profile/${userId}`;
  };
  return (
    <Route
      render={() =>
        userId || compId ? (
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
