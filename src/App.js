import React from "react";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import test from "./test";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

  Child = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    return (
      <div>
        <h3>ID: </h3>
      </div>
    );
  };

  //function register(){return true};
  //Function login(){}

  render() {
    const { register, login, usrId } = this.state;
    return (
      <Router>
        {/* !register && !login ? (
        <Register onSubmit={this.onSubmit} onLogin={this.onLogOut} />
        ) : register && !login ? (
        <Login onSubmit={this.onSubmit} onRegistr={this.onRegistr} />
        ) : (
        <Profile onLogOut={this.onLogOut} usrId={usrId} />
        ); */}
        <div>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
