import React from "react";
import { InputField } from "./InputField";

export const Register = ({
  name,
  email,
  password,
  termsNPolicy,
  onChangeInput,
}) => {
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
              type="text"
              placeholder="Name"
              value={name}
              onChangeInput={onChangeInput}
            />
            <InputField
              id="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChangeInput={onChangeInput}
            />
            <InputField
              id="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChangeInput={onChangeInput}
            />
            <div className="form-group">
              <div className="checkbox i-checks">
                <label>
                  <InputField
                    type="checkbox"
                    id="TermsNPolicy"
                    value={termsNPolicy}
                    onChangeInput={onChangeInput}
                  />
                  <i></i> Agree the terms and policy
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox i-checks">
                <label>
                  <input type="checkbox" />
                  <i></i> Agree the terms and policy{" "}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
            >
              Register
            </button>
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
};
