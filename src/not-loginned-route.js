import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const NotLoginnedRoute = (props) => {
  const userId = Cookies.get("usrId");
  return (
    <Route
      render={() =>
        userId ? (
          <Redirect to={{ pathname: `/profile/${userId}` }} />
        ) : (
          props.children
        )
      }
    />
  );
};
