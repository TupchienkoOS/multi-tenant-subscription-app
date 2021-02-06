import React from "react";
import { InputField } from "../../../input-field";

export const AccountStep = ({
  name,
  email,
  password,
  confPassword,
  onChangeInput,
}) => {
  return (
    <div className="content clearfix">
      <fieldset className="body current">
        <h2>Account Information</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Company name *</label>
              <InputField
                id="Name"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChangeInput={onChangeInput}
              />
            </div>
            <div className="form-group">
              <label>Password *</label>
              <InputField
                id="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChangeInput={onChangeInput}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password *</label>
              <InputField
                id="Confirm Password"
                type="password"
                name="confPassword"
                placeholder="Confirm Password"
                value={confPassword}
                onChangeInput={onChangeInput}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div style={{ marginTop: "20px" }}>
                <i
                  className="fa fa-sign-in"
                  style={{ fontSize: "180px", color: "#e5e5e5" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
