import React from "react";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import test from "./test";
import test1 from "./test1";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

  render() {
    const { register, login, usrId } = this.state;
    return (
      //<Login />
      //<Register />
      //<Profile />
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          {/* 
           <Route exact path="/test" component={test} />
          <Route exact path="/test1" component={test1} />
          <Route exact path="/" component={test} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} /> */}
          {/* <Route  path="/login" component={Login} /> */}
        </div>
      </Router>
    );
  }
}

export default App;

//  !register && !login ? (
//       <Register onSubmit={this.onSubmit} onLogin={this.onLogOut} />
//       ) : register && !login ? (
//       <Login onSubmit={this.onSubmit} onRegistr={this.onRegistr} />
//       ) : (
//       <Profile onLogOut={this.onLogOut} usrId={usrId} />
//       );
//function register(){return true};
//Function login(){}
