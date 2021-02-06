import React from "react";
import { Route, Redirect, Switch, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import ProfileContainer from "../pages/profile";
import { NoMatch } from "../no-match";

export const PrivateRoutes = ({ children, ...rest }) => {
  const user = Cookies.get("user");
  const company = Cookies.get("company");

  const getRoutesFor = () => {
    const loginAs = ["all"];
    if (user) {
      loginAs.push("user");
    } else if (company) {
      loginAs.push("company");
    }
    return ["user", "company", "all"];
  };

  const isLogin = (role) => {
    if (role === "user" && user) return true;
    else if (role === "company" && company) return true;
    else return false;
  };
  const role = rest.computedMatch.params.role;
  const privateRoutes = [
    {
      loginPath: `/${role}/login`,
      path: ["/:role/", "/:role/profile", "/:role/profile/:id"],
      exact: true,
      component: <ProfileContainer />,
    },
  ];

  const getRoutes = () => {
    console.log("private routes");
    const routes = privateRoutes.filter((route) =>
      getRoutesFor().includes(role)
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
            isLogin(role) ? (
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
