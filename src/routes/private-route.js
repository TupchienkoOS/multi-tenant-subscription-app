import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import UserContainer from "../pages/profile";
import CompanyContainer from "../company-profile";
import { NoMatch } from "../no-match";

export const PrivateRoutes = ({ children, ...rest }) => {
  const usrId = Cookies.get("usrId");
  const compId = Cookies.get("compId");

  const getRoutesFor = () => {
    const loginAs = ["all"];
    if (usrId) {
      loginAs.push("user");
    } else if (compId) {
      loginAs.push("company");
    }
    return ["user", "company", "all"];
  };

  const isLogin = (role) => {
    if (role === "user" && usrId) return true;
    else if (role === "company" && compId) return true;
    else return false;
  };

  const privateRoutes = [
    {
      for: "user",
      defaultPath: "/user/profile",
      loginPath: "/user/login",
      path: ["/user", "/user/profile", "/user/profile/:id"],
      exact: true,
      component: <UserContainer />,
    },
    {
      for: "company",
      defaultPath: "/company/profile",
      loginPath: "/company/login",
      path: ["/company", "/company/profile", "/company/profile/:id"],
      exact: true,
      component: <CompanyContainer />,
    },
  ];

  const getRoutes = () => {
    console.log("private routes");
    const routes = privateRoutes.filter((route) =>
      getRoutesFor().includes(route.for)
    );
    console.log(routes, "rotes");
    return routes;
  };
  return (
    <Switch>
      {getRoutes().map((route, index) => (
        <Route
          exact={route.exact}
          path={route.path}
          key={index}
          render={({ location }) =>
            isLogin(route.for) ? (
              route.component
            ) : (
              <Redirect
                to={{
                  pathname: [route.loginPath],
                  state: { from: location },
                }}
              />
            )
          }
        />
      ))}
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
