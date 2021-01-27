import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { roles } from "../data/roles";
import DbApi from "../data/dbApi";

export const PublicRoute = (props) => {
  const user = Cookies.get("user");
  const company = Cookies.get("company");

  console.log("public route", props);

  const role = props.computedMatch.params.role;

  const getDefaultPath = () => {
    let defaultPath;
    if (role === "user" && user) {
      defaultPath = roles.filter(
        (role) => role.id === DbApi.getUserById(user).role
      )[0].defaultPath;
    } else if (role === "company" && company) {
      defaultPath = roles.filter(
        (role) => role.id === DbApi.getCompanyById(company).role
      )[0].defaultPath;
    }
    return defaultPath;
  };

  const previousLocation = () => {
    console.log("notloginnedroute");
    if (
      typeof props.location.state === "undefined" ||
      props.location.state.from.pathname === "/"
    ) {
      return getDefaultPath();
    }
    return props.location.state.from.pathname;
  };

  const isLogin = () => {
    if (role === "user" && user) return true;
    else if (role === "company" && company) return true;
    else return false;
  };

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
