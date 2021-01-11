import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../register";
import Login from "../login";
import { PrivateRoutes } from "./private-route";
import { PublicRoutes } from "./public-routes";
import Profile from "../profile";
import { CompanyProfile } from "../company-profile";
import { GoToPrevLocationAfterLogIn } from "./goto-prev-location-after-login";

class Routes extends React.Component {
  componentDidUpdate() {
    document.body.className = "";
  }

  render() {
    const { user, onLogin, onLogOut, onRegistr } = this.props;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <Switch>
          <GoToPrevLocationAfterLogIn exact path="/login">
            <Login onLogin={onLogin} />
          </GoToPrevLocationAfterLogIn>
          <GoToPrevLocationAfterLogIn exact path="/register">
            <Register onRegistr={onRegistr} />
          </GoToPrevLocationAfterLogIn>
          <PrivateRoutes path="/" onLogOut={onLogOut} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
