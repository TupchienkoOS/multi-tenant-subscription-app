import React from "react";
import { InputField } from "./input-field";
import { Button } from "./button";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: { name: "", password: "" } };
  }

  onSubmit = () => {};
  onRegistr = () => {};

  onChangeInput = (event) => {
    debugger;
    const { values } = this.state;
    const { name, value } = event.target;
    const updatedValues = { ...values };
    this.setState({
      values: {
        ...updatedValues,
        [name]: value,
      },
    });
  };

  render() {
    const { name, password } = this.state;
    const { onSubmit, onRegistr } = this; //.props;
    return (
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h1 className="logo-name">IN+</h1>
            </div>
            <h3>Welcome to IN+</h3>
            <p>
              Perfectly designed and precisely prepared admin theme with over 50
              pages with extra new web app views.
              {/* <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)--> */}
            </p>
            <p>Login in. To see it in action.</p>
            <form className="m-t">
              {/* role="form" action="index.html" */}
              <InputField
                id="Name"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
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
              <Button
                id={"login"}
                name={"login"}
                type="button"
                className="btn btn-primary block full-width m-b"
                label="Login"
                onSubmit={onSubmit}
              />

              <a href="#">
                <small>Forgot password?</small>
              </a>
              <p className="text-muted text-center">
                <small>Do not have an account?</small>
              </p>
              <a
                onClick={onRegistr}
                className="btn btn-sm btn-white btn-block"
                href="register.html"
              >
                Create an account
              </a>
            </form>
            <p className="m-t">
              {" "}
              <small>
                Inspinia we app framework base on Bootstrap 3 &copy; 2014
              </small>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
