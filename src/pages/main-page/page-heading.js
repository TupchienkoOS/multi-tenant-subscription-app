import React from "react";

export const PageHeading = ({ displayHeading }) => {
  return (
    <div className="row wrapper border-bottom white-bg page-heading">
      <div className="col-lg-10">
        <h2>{displayHeading}</h2>
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a>Extra Pages</a>
          </li>
          <li className="breadcrumb-item active">
            <strong>Profile</strong>
          </li>
        </ol> */}
      </div>
    </div>
  );
};
