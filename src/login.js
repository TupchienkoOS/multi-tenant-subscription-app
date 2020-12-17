import React from "react";
import { InputField } from "./input-field";
import { Button } from "./button";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: { name: "", password: "" } };
  }

  componentDidUpdate() {}

  componentDidMount() {
    console.log("didmount login");
    document.body.className = "gray-bg";
  }

  onChangeInput = (event) => {
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
    const { login, password } = this.state.values;
    const { onLogin } = this.props;
    return (
      <div>
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
                value={login}
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
                type={"button"}
                className="btn btn-primary block full-width m-b"
                label="Login"
                onClick={() => {
                  onLogin(this.state.values);
                }}
              />

              <a href="#">
                <small>Forgot password?</small>
              </a>
              <p className="text-muted text-center">
                <small>Do not have an account?</small>
              </p>
              <span className="btn btn-sm btn-white btn-block">
                <Link to={"/register"}>Create an account</Link>
              </span>
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
