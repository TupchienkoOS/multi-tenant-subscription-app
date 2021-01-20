import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../register";
import Login from "../login";
import { PrivateRoutes } from "./private-route";
import Profile from "../profile";
import { CompanyProfile } from "../company-profile";
import { PublicRoute } from "./public-route";

class Routes extends React.Component {
  componentDidUpdate() {
    document.body.className = "";
  }

  render() {
    const { user, onLogin, onLogOut, onRegistr, company } = this.props;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <Switch>
          <PublicRoute exact path={["/login", "/company/login"]}>
            <Login onLogin={onLogin} user company />
          </PublicRoute>
          <PublicRoute exact path={["/register", "/company/register"]}>
            <Register onRegistr={onRegistr} />
          </PublicRoute>
          <PrivateRoutes path="/" onLogOut={onLogOut} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
