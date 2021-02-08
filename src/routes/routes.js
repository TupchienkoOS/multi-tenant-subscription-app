import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import { PrivateRoutes } from "./private-route";
import { PublicRoute } from "./public-route";

class Routes extends React.Component {
  componentDidUpdate() {
    document.body.className = "";
  }

  render() {
    const { user, onLogin, onLogOut, onRegistr, company } = this.props;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <Route exact path={"/"}>
          <Redirect to={"/user"} />
        </Route>
        <Switch>
          <PublicRoute exact path={["/:role/login", "/:role/login"]}>
            <Login onLogin={onLogin} user company />
          </PublicRoute>
          <PublicRoute exact path={["/:role/register", "/:role/register"]}>
            <Register onRegistr={onRegistr} />
          </PublicRoute>
          <PrivateRoutes
            path={["/:role/:page/:id", "/:role/:page", "/:role"]}
            onLogOut={onLogOut}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
