import React from "react";
import { InputField } from "../../../input-field";

export const ProfileStep = ({
  email,

  onChangeInput,
}) => {
  return (
    <div className="content clearfix">
      <fieldset className="body current">
        <h2>Profile Information</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>First name *</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control required"
              />
            </div>
            <div className="form-group">
              <label>Last name *</label>
              <input
                id="surname"
                name="surname"
                type="text"
                className="form-control required"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email *</label>
              <InputField
                id="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChangeInput={onChangeInput}
              />
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input
                id="address"
                name="address"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
