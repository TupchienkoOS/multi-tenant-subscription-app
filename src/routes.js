import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import { PrivateRoute } from "./private-route";
import { Profile } from "./profile";
import { NotLoginnedRoute } from "./not-loginned-route";

export const Routes = ({ user, onLogin, isLoginnedUser, onLogOut }) => {
  return (
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
      <PrivateRoute
        path="/profile/:id"
        user={user}
        onLogOut={onLogOut}
        component={Profile}
      />
      <PrivateRoute path="/profile" user={user} onLogOut={onLogOut} />
    </Switch>
  );
};
