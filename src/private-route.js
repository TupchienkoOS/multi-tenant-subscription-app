import React from "react";
import { Profile } from "./profile";
import { Route, Redirect, useParams } from "react-router-dom";
import { users } from "./data/users";

export default function PrivateRoute(props) {
  const getCurrentUser = () => {
    debugger;
    var currUser = users.filter((user) => {
      return user.id === +props.computedMatch.params.id;
    });
    return currUser[0];
  };

  return (
    <Route
      render={() =>
        props.user ? (
          <Profile onLogOut={props.onLogOut} user={props.user} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
