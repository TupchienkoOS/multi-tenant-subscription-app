import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import UserContainer from "../profile";
import { CompanyProfile } from "../company-profile";

export const PrivateRoute = ({ children, ...rest }) => {
  const usrId = Cookies.get("usrId");
  console.log("PrivateRoute");
  return usrId ? (
    <Switch>
      <Redirect exact from={`/profile`} to={`/profile/${usrId}`} />
      <Route path={`/profile`}>
        <UserContainer location={rest.location} />
      </Route>

      <Route exact path="/company">
        <CompanyProfile />
      </Route>
    </Switch>
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
