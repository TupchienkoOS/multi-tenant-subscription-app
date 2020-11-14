import React from "react";
import { InputField } from "./input-field";
import { CheckBox } from "./check-box";
import { Button } from "./button";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        password: "",
        termsNPolicy: false,
      },
      hover: { termsNPolicy: false },
    };
  }

  onMouseEnter = (event) => {
    this.setState({ hover: { termsNPolicy: true } });
  };
  onMouseLeave = (event) => {
    this.setState({ hover: { termsNPolicy: false } });
  };

  onChangeInput = (event) => {
    const { values } = this.state;
    const { name, value, checked, type } = event.target;
    const updatedValues = { ...values };
    const inputVal = type === "checkbox" ? checked : value;
    this.setState({
      values: {
        ...updatedValues,
        [name]: inputVal,
      },
    });
  };

  render() {
    const { name, email, password, termsNPolicy } = this.state.values;
    const { onSubmit } = this.props;
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
                onChangeInput={this.onChangeInput}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              />
              <Button
                id={"register"}
                name={"register"}
                type="submit"
                className="btn btn-primary block full-width m-b"
                label="Register"
                onSubmit={onSubmit}
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
