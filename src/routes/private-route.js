import React from "react";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import Cookies from "js-cookie";
import UserContainer from "../profile";
import CompanyContainer from "../company-profile";
import { NoMatch } from "../no-match";

export const PrivateRoutes = ({ children, ...rest }) => {
  const usrId = Cookies.get("usrId");
  const compId = Cookies.get("compId");

  const privateRoutes = [
    {
      path: "/profile/:id",
      from: "/profile/",
      to: `/profile/${usrId}`,
      component: <UserContainer />,
    },
    {
      path: "/profile",
      from: "/profile/",
      to: `/profile/${usrId}`,
      component: <UserContainer />,
    },
    {
      path: "/company",
      from: "/company/",
      to: `/company/${compId}`,
      component: <CompanyContainer />,
    },
    {
      path: "/company/:id",
      from: "/company/",
      to: `/company/${compId}`,
      component: <CompanyContainer />,
    },
    {
      path: "*",
      from: "/company/",
      to: `/company/${compId}`,
      component: <NoMatch />,
    },
  ];

  const routes = () => {
    console.log("private routes");
    return (
      <Switch>
        {privateRoutes.map((route, index) => (
          <Route exact path={route.path} key={index}>
            {route.component}
          </Route>
        ))}
      </Switch>
    );
  };

  console.log("PrivateRoute");
  return usrId || compId ? (
    routes()
  ) : (
    <Route
      render={(props) => (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )}
    />
  );
};

// const isUser = useRouteMatch({ path: "/profile" });
// const isCompany = useRouteMatch({ path: "/company" });

// const path = () => {
//   return isUser === null ? isCompany.path : isUser.path;
// };

// const logOutUserToComp = () => {
//   if (typeof usrId !== "undefined" && isCompany) rest.onLogOut();
// };
