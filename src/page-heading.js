import React from "react";

export const PageHeading = () => {
  return (
    <div className="row wrapper border-bottom white-bg page-heading">
      <div className="col-lg-10">
        <h2>Profile</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a>Extra Pages</a>
          </li>
          <li className="breadcrumb-item active">
            <strong>Profile</strong>
          </li>
        </ol>
      </div>
    </div>
  );
};
