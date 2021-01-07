import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../register";
import Login from "../login";
import { PrivateRoute } from "./private-route";
import { GoToPrevLocationAfterLogIn } from "./goto-prev-location-after-login";
import { CompanyProfile } from "../company-profile";

class Routes extends React.Component {
  componentDidUpdate() {
    document.body.className = "";
  }

  render() {
    const { user, onLogin, onLogOut } = this.props;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <Switch>
          <GoToPrevLocationAfterLogIn
            exact
            path="/"
            user={user}
            onLogOut={onLogOut}
          >
            <Login onLogin={onLogin} />
          </GoToPrevLocationAfterLogIn>
          <GoToPrevLocationAfterLogIn
            path="/login"
            user={user}
            onLogOut={onLogOut}
          >
            <Login onLogin={onLogin} />
          </GoToPrevLocationAfterLogIn>
          <GoToPrevLocationAfterLogIn
            path="/register"
            user={user}
            onLogOut={onLogOut}
          >
            <Register />
          </GoToPrevLocationAfterLogIn>
          <PrivateRoute path="/profile/:id" user={user} onLogOut={onLogOut} />
          <PrivateRoute />
          <PrivateRoute path="/profile" user={user} onLogOut={onLogOut} />
          <PrivateRoute />
          <Route path="/company/:id" children={<CompanyProfile />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
