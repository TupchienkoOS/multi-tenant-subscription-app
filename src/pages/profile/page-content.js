import React from "react";
import CompaniesGrid from "./companies-grid/companies-grid";

export const PageContent = () => {
  return (
    <div className="wrapper wrapper-content">
      <div className="wrapper wrapper-content animated fadeInRight ecommerce">
        <CompaniesGrid />
      </div>
    </div>
  );
};
