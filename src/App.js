import React from "react";
import Register from "./register";
import Login from "./login";
import { Profile } from "./profile";
import PrivateRoute from "./private-route";
import { users } from "./data/users";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  IndexRoute,
  useRouteHistory,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      register: true,
      login: true,
      err: {},
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  onLogOut = (event) => {
    event.preventDefault();
    this.setState({ login: false, register: true });
  };

  onRegistr = (event) => {
    event.preventDefault();
    this.setState({ register: false });
  };

  onLogin = (loginUser) => {
    const currentUser = users.filter((user) => {
      return user.login === loginUser.name;
    })[0];
    debugger;
    console.log("logined", currentUser);
    this.setState({ user: currentUser });
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

  isLoginnedUser = () =>
    this.state.user ? (
      <Redirect to={{ pathname: `/profile/${this.state.user.id}` }} />
    ) : (
      <Redirect to={{ pathname: `/login` }} />
    );

  render() {
    const { register, login, usrId, user } = this.state;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login">
              {this.state.user ? (
                <Redirect to={{ pathname: `/profile/${this.state.user.id}` }} />
              ) : (
                <Login onLogin={this.onLogin} />
              )}
            </Route>
            <Route path="/register" component={Register} />
            <Route exact path="/profile" render={this.isLoginnedUser} />
            <PrivateRoute
              path="/profile/:id"
              user={user}
              onLogOut={this.onLogOut}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
