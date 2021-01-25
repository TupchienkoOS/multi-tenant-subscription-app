import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";
import Cookies from "js-cookie";
import { roles } from "../data/roles";
import DbApi from "../data/dbApi";

//Розібратись шоб ініціалізація функцій була перед їх викристанням
export const PublicRoute = (props) => {
  const user = Cookies.get("user");
  const company = Cookies.get("company");

  console.log("public route", props);

  const getDefaultPath = () => {
    let defaultPath;
    if (isUser && user) {
      defaultPath = roles.filter(
        (role) => role.id === DbApi.getUserById(user).role
      )[0].defaultPath;
    } else if (isCompany && company) {
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

  const isCompany = matchPath(props.location.pathname, {
    path: "/company",
    exact: false,
    strict: true,
  });
  const isUser = matchPath(props.location.pathname, {
    path: "/user",
    exact: false,
    strict: true,
  });

  console.log("public route", isCompany, isUser);

  const isLogin = () => {
    if (isUser && user) return true;
    else if (isCompany && company) return true;
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
