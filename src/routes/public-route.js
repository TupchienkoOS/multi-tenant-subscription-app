import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";
import Cookies from "js-cookie";

export const PublicRoute = (props) => {
  const usrId = Cookies.get("usrId");
  const compId = Cookies.get("compId");

  const isLogin = () => {
    if (usrId) return true;
    else return false;
  };

  console.log(
    matchPath("/company", {
      path: "/company",
      exact: true,
      strict: true,
    }),
    "public routes props"
  );

  const previousLocation = () => {
    console.log("notloginnedroute");
    if (
      typeof props.location.state === "undefined" ||
      props.location.state.from.pathname === "/"
    ) {
      return `/login`;
    }
    return props.location.state.from.pathname;
  };

  const isCompany = matchPath(previousLocation(), {
    path: "/company",
    exact: true,
    strict: true,
  });
  const isUser = matchPath(previousLocation(), {
    path: "/profile",
    exact: true,
    strict: true,
  });

  return (
    <Route
      render={() =>
        isLogin() ? (
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
