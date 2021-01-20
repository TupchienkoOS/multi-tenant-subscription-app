import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";
import Cookies from "js-cookie";
import { roles } from "../data/roles";
import DbApi from "../data/dbApi";

//Розібратись шоб ініціалізація функцій була перед їх викристанням
export const PublicRoute = (props) => {
  const usrId = Cookies.get("usrId");
  const compId = Cookies.get("compId");

  console.log("public route", props);

  const getDefaultPath = () => {
    let defaultPath;
    if (isUser && usrId) {
      debugger;
      defaultPath = roles.filter(
        (role) => role.id === DbApi.getUserById(usrId).role
      )[0].defaultPath;
    } else if (isCompany && compId) {
      debugger;
      defaultPath = roles.filter(
        (role) => role.id === DbApi.getCompanyById(compId).role
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
    path: "/login",
    exact: false,
    strict: true,
  });

  console.log("public route", isCompany, isUser);

  const isLogin = () => {
    if (isUser && usrId) return true;
    else if (isCompany && compId) return true;
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
