import React from "react";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import Cookies from "js-cookie";
import UserContainer from "../profile";
import CompanyContainer from "../company-profile";

export const PrivateRoutes = ({ children, ...rest }) => {
  const usrId = Cookies.get("usrId");
  const compId = Cookies.get("compId");

  const routes = () => {
    console.log("private routes");
    return (
      <Switch>
        <Redirect exact from={"/profile/"} to={`/profile/${usrId}`} />
        <Route path={"/profile/:id"}>
          <UserContainer />
        </Route>
        <Redirect exact from={"/company/"} to={`/company/${compId}`} />
        <Route path={"/company/:id"}>
          <CompanyContainer />
        </Route>
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
