import React from "react";
import CompaniesGrid from "./companies-grid/companies-grid";
import { rolesIdName } from "../../data/roles";

export const PageContent = ({ role }) => {
  return role === "user" ? (
    <div className="wrapper wrapper-content">
      <div className="wrapper wrapper-content animated fadeInRight ecommerce">
        <CompaniesGrid />
      </div>
    </div>
  ) : (
    <div>Company</div>
  );
};
