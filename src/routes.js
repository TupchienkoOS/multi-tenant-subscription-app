import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import { PrivateRoute } from "./private-route";
import { NotLoginnedRoute } from "./not-loginned-route";

class Routes extends React.Component {
  componentDidUpdate() {
    console.log("didupdate routes");
    this.changeBodyBackGround();
  }

  render() {
    const { user, onLogin, onLogOut } = this.props;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <Switch>
          <NotLoginnedRoute exact path="/" user={user} onLogOut={onLogOut}>
            <Login onLogin={onLogin} />
          </NotLoginnedRoute>
          <NotLoginnedRoute path="/login" user={user} onLogOut={onLogOut}>
            <Login onLogin={onLogin} />
          </NotLoginnedRoute>
          <NotLoginnedRoute path="/register" user={user} onLogOut={onLogOut}>
            <Register />
          </NotLoginnedRoute>
          <PrivateRoute path="/profile/:id" user={user} onLogOut={onLogOut} />
          <PrivateRoute path="/profile" user={user} onLogOut={onLogOut} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
