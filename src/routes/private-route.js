import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Profile from "../profile";

export const PrivateRoute = (props) => {
  console.log(props);
  console.log("PrivateRoute");
  return (
    <Route
      render={(props) =>
        Cookies.get("usrId") ? (
          <Profile />
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
