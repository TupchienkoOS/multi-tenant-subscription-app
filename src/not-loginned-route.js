import React from "react";
import { Profile } from "./profile";
import { Route } from "react-router-dom";

export const NotLoginnedRoute = (props) => {
  return (
    <Route
      render={() =>
        props.user ? (
          <Profile onLogOut={props.onLogOut} user={props.user} />
        ) : (
          props.children
        )
      }
    />
  );
};
