import React from "react";
import Register from "./register";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false,
      values: {
        name: "",
        email: "",
        password: "",
        termsNPolicy: false,
      },
      hover: { termsNPolicy: false },
    };
  }

  onSubmit = (event) => {
    this.setState({ confirmed: true });
  };

  onMouseEnter = (event) => {
    this.setState({ hover: { termsNPolicy: true } });
  };
  onMouseLeave = (event) => {
    this.setState({ hover: { termsNPolicy: false } });
  };

  onChangeInput = (event) => {
    const { values } = this.state;
    const { name, value } = event.target;
    const updatedValues = { ...values };
    this.setState({
      values: {
        ...updatedValues,
        [name]: name === "termsNPolicy" ? event.target.checked : value,
      },
    });
  };

  render() {
    return (
      !this.state.confirmed && (
        <Register
          values={this.state.values}
          termsNPolicyHover={this.state.hover.termsNPolicy}
          onSubmit={this.onSubmit}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onChangeInput={this.onChangeInput}
        />
      )
    );
  }
}

export default App;
