import React from "react";

export const Register = () => {
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
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required=""
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required=""
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required=""
              ></input>
            </div>
            <div className="form-group">
              <div className="checkbox i-checks">
                <label>
                  <input type="checkbox"></input>
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
