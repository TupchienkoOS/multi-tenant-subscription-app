import React from "react";
import Register from "./register";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false,
      err: {},
    };
  }

  onSubmit = (event) => {
    debugger;
    this.setState({ confirmed: true });
    try {
      // await this.register();
    } catch (err) {
      this.setState.err = err;
    } finally {
      //this.setState({ confirmed: false });
    }
  };

  //function register(){return true};

  render() {
    return !this.state.confirmed && <Register onSubmit={this.onSubmit} />;
  }
}

export default App;
