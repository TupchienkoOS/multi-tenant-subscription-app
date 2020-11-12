import React from "react";
import { InputField } from "./InputField";
import { CheckBox } from "./CheckBox";
import { Button } from "./Button";

class Register extends React.Component {
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
    debugger;
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
    const { name, email, password, termsNPolicy } = this.state.values;

    return (
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen   animated fadeInDown">
          <div>
            <div>
              <h1 className="logo-name">IN+</h1>
            </div>
            <h3>Register to IN+</h3>
            <p>Create account to see it in action.</p>
            <form className="m-t">
              {/*role="form" action="login.html" */}
              <InputField
                id="Name"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChangeInput={this.onChangeInput}
              />
              <InputField
                id="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChangeInput={this.onChangeInput}
              />
              <InputField
                id="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChangeInput={this.onChangeInput}
              />
              <CheckBox
                id="TermsNPolicy"
                name="termsNPolicy"
                value={termsNPolicy}
                label="Agree the terms and policy"
                hover={this.state.hover.termsNPolicy}
                onchangeInput={this.onChangeInput}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              />
              <Button
                type="submit"
                className="btn btn-primary block full-width m-b"
                label="Register"
                onSubmit={this.onSubmit}
              />
              <p className="text-muted text-center">
                <small>Already have an account?</small>
              </p>
              <a className="btn btn-sm btn-white btn-block" href="login.html">
                Login
              </a>
            </form>
            <p className="m-t">
              <small>
                Inspinia we app framework base on Bootstrap 3 &copy; 2014
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
