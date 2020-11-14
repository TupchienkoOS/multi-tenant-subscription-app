import React from "react";
import Register from "./register";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false,
    };
  }

  render() {
    return !this.state.confirmed && <Register />;
  }
}

export default App;
