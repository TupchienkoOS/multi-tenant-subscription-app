import React from "react";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";

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

  //function register(){return true};
  //Function login(){}

  render() {
    const { register, login, usrId } = this.state;
    return !register && !login ? (
      <Register onSubmit={this.onSubmit} onLogin={this.onLogOut} />
    ) : register && !login ? (
      <Login onSubmit={this.onSubmit} onRegistr={this.onRegistr} />
    ) : (
      <Profile onLogOut={this.onLogOut} usrId={usrId} />
    );
  }
}

export default App;
