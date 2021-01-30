import React from "react";

export const AddCompWizard = () => {
  return (
    <div className="ibox-content m-b-sm border-bottom">
      <div className="row">
        <div className="col-lg-12">
          <div className="ibox">
            <div className="ibox-title">
              <h5>Wizard with Validation</h5>
              <div className="ibox-tools">
                <a className="collapse-link">
                  <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 2
                    </a>
                  </li>
                </ul>
                <a className="close-link">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">
              <form id="form" action="#" className="wizard-big wizard clearfix">
                <div className="steps clearfix">
                  <ul role="tablist">
                    <li
                      role="tab"
                      className="first current"
                      aria-disabled="false"
                      aria-selected="true"
                    >
                      <a
                        id="form-t-0"
                        href="#form-h-0"
                        aria-controls="form-p-0"
                      >
                        <span className="current-info audible">
                          current step:{" "}
                        </span>
                        <span className="number">1.</span> Account
                      </a>
                    </li>
                    <li role="tab" className="disabled" aria-disabled="true">
                      <a
                        id="form-t-1"
                        href="#form-h-1"
                        aria-controls="form-p-1"
                      >
                        <span className="number">2.</span> Profile
                      </a>
                    </li>
                    <li role="tab" className="disabled" aria-disabled="true">
                      <a
                        id="form-t-2"
                        href="#form-h-2"
                        aria-controls="form-p-2"
                      >
                        <span className="number">3.</span> Warning
                      </a>
                    </li>
                    <li
                      role="tab"
                      className="disabled last"
                      aria-disabled="true"
                    >
                      <a
                        id="form-t-3"
                        href="#form-h-3"
                        aria-controls="form-p-3"
                      >
                        <span className="number">4.</span> Finish
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content clearfix">
                  <fieldset className="body current">
                    <h2>Account Information</h2>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="form-group">
                          <label>Username *</label>
                          <input
                            id="userName"
                            name="userName"
                            type="text"
                            className="form-control required"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password *</label>
                          <input
                            id="password"
                            name="password"
                            type="text"
                            className="form-control required"
                          />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password *</label>
                          <input
                            id="confirm"
                            name="confirm"
                            type="text"
                            className="form-control required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
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
                  {/* <h1>Profile</h1>
              <fieldset>
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
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className="form-control required email"
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

              <h1>Warning</h1>
              <fieldset>
                <div className="text-center" style={{ marginTop: "120px" }}>
                  <h2>You did it Man :-)</h2>
                </div>
              </fieldset>

              <h1>Finish</h1>
              <fieldset>
                <h2>Terms and Conditions</h2>
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  className="required"
                />{" "}
                <label for="acceptTerms">
                  I agree with the Terms and Conditions.
                </label>
              </fieldset> */}
                </div>
                <div className="actions clearfix">
                  <ul role="menu" aria-label="Pagination">
                    <li className="disabled" aria-disabled="true">
                      <a href="#previous" role="menuitem">
                        Previous
                      </a>
                    </li>
                    <li aria-hidden="false" aria-disabled="false">
                      <a href="#next" role="menuitem">
                        Next
                      </a>
                    </li>
                    <li aria-hidden="true" style={{ display: "none" }}>
                      <a href="#finish" role="menuitem">
                        Finish
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
