import React, { Component } from "react";
import Cookies from "js-cookie";
// import { companies } from "./companies";

let companies = JSON.parse(localStorage.getItem("companies"));
let users = JSON.parse(localStorage.getItem("users"));

export default class DbApi extends Component {
  constructor() {
    super();
    console.log("DbApi ctor");
    this.state = { users: [], companies: [] };
  }

  shouldComponentUpdate() {
    console.log("DbApi shouldComponentUpdate");
  }

  componentDidMount() {
    console.log("DbApi componentDidMount");
    this.setState({
      users: JSON.parse(localStorage.getItem("users")),
      // companies: JSON.parse(localStorage.getItem("companies")),
    });
  }

  static getCurrentUserId = () => {
    return Cookies.get(["user"]);
  };

  static updateCompanies = () => {
    localStorage.companies = JSON.stringify(companies);
    //this.setState({ companies: JSON.stringify(companies) });
  };

  static updateUsers() {
    localStorage.users = JSON.stringify(users);
    //this.setState({ users: JSON.stringify(users) });
  }

  static deleteCompanyOwner = async (compId) => {
    const currentUserID = this.getCurrentUserId();

    const changedUsers = users.map((user) => {
      if (user.id === +currentUserID) {
        const changedCompanies = user.companies.filter(
          (companiesId) => companiesId !== compId
        );
        user.companies = changedCompanies;
      }
      return user;
    });
    users = changedUsers;
    this.updateUsers();
    return await Promise.resolve();
  };

  static registerCompany = (company) => {
    companies.push({
      id: companies.length + 1,
      role: company.role,
      name: company.name,
      login: company.email,
    });
    console.log("company registered", companies);
    this.updateCompanies();
  };

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
    this.updateUsers();
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

  static getUserCompanies = (userCompIds) => {
    let userCompanies;

    if (typeof userCompIds !== "undefined") {
      userCompanies = companies.filter((company) =>
        userCompIds.includes(company.id)
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
