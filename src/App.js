import React from "react";
import Register from "./Register";

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
    if (event.target.name === "termsNPolicy") {
      this.setState({
        values: { ...updatedValues, [name]: !updatedValues.termsNPolicy },
      });
    } else {
      this.setState({
        values: { ...updatedValues, [name]: value },
      });
    }
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
