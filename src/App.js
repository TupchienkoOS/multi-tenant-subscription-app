import React from "react";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      register: false,
      login: false,
      err: {},
    };
  }

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
    const { register, login } = this.state;
    return login ? (
      <Profile />
    ) : register ? (
      <Login onSubmit={this.onSubmit} />
    ) : (
      <Register onSubmit={this.onSubmit} />
    );
  }
}

export default App;
