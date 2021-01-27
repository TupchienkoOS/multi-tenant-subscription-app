import React, { Component } from "react";
import { users } from "./users";
import { companies } from "./companies";

export default class DbApi extends Component {
  static registerUser = (user) => {
    users.push({
      id: users.length + 1,
      name: user.name,
      role: 1,
      login: user.email,
      companies: [],
      messages: [],
      notifications: [],
      avatarSmall: "",
    });
    console.log("registeUser", users);
  };

  static getUserByLogin = (loginUser) => {
    let currentUser = users.filter((user) => {
      return user.login === loginUser.name;
    })[0];

    if (typeof currentUser === "undefined") {
      currentUser = companies.filter((user) => {
        return user.login === loginUser.name;
      })[0];
    }
    return currentUser;
  };

  static getUserById = (usrId) => {
    const currentUser = users.filter((user) => {
      return user.id === +usrId;
    })[0];
    return currentUser;
  };

  static getCompanyById = (compId) => {
    const currentUser = companies.filter((comp) => {
      return comp.id === +compId;
    })[0];
    return currentUser;
  };

  static getUserCompanies = (userId) => {
    debugger;
    let userCompanies;
    const userCompIds = users.filter((user) => user.id === userId)[0].companies;
    if (userCompIds.length !== 0) {
      userCompanies = companies.filter((company) =>
        userCompIds.filter((companyId) => companyId === company.id)
      );
    } else {
      userCompanies = [];
    }
    return userCompanies;
  };

  render() {
    return <div></div>;
  }
}
