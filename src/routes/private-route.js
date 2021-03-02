import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import PageContainer from "../pages/page";
import { NoMatch } from "../no-match";

export const PrivateRoutes = ({ children, ...rest }) => {
  const isLogin = (role) => {
    if (role && Cookies.get([role])) return true;
    else return false;
    //Додати перевірку чи id компанії сбігається з id компанії яка залогінена
  };
  const role = rest.computedMatch.params.role;

  const privateRoutes = [
    {
      loginPath: `/${role}/login`,
      path: ["/:role/", "/:role/:page", "/:role/:page/:id"],
      exact: true,
      component: <PageContainer />,
    },
  ];

  const getRoutes = () => {
    const routes = privateRoutes;
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
