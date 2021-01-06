import React, { Component } from "react";
import { users } from "./users";
import { companies } from "./companies";

export default class DbApi extends Component {
  static getUserCompanies = (userId) => {
    const userCompIds = users.filter((user) => user.id === userId)[0].companies;
    const userCompanies = companies.filter((company) =>
      userCompIds.filter((companyId) => companyId === company.id)
    );
    return userCompanies;
  };

  render() {
    return <div></div>;
  }
}
