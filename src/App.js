import React from "react";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import PrivateRoute from "./private-route";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      register: true,
      login: true,
      err: {},
      usrId: 1,
    };
  }

  onLogOut = (event) => {
    event.preventDefault();
    this.setState({ login: false, register: true });
  };

  onRegistr = (event) => {
    event.preventDefault();
    this.setState({ register: false });
  };

  onSubmit = (event) => {
    const eventName = event.target.name;
    this.setState({ [eventName]: true });
    try {
      // await this.register();
    } catch (err) {
      this.setState.err = err;
    } finally {
      //this.setState({ confirmed: false });
    }
    event.preventDefault();
  };

  render() {
    const { register, login, usrId, user } = this.state;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/profile" user={user}>
              <Profile />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
