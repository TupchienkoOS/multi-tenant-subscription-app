import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Routes } from "./routes";
import { users } from "./data/users";

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

  componentDidMount() {}

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
    const { user } = this.state;
    return (
      <Router basename="/multi-tenant-subscription-app">
        <div>
          <Routes
            user={user}
            onLogin={this.onLogin}
            isLoginnedUser={this.isLoginnedUser}
            onLogOut={this.onLogOut}
          />
        </div>
      </Router>
    );
  }
}

export default App;
