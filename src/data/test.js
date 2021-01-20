const companies = [];
const companyUsers = [];
const userRoles = [];
const roles = { user: 1, "owner", "employee"];

function registerCompany(companyName, owner) {
  companies.add({ name: companyName });
  companyUsers.add({ user: owner, company: companyName });
  userRoles.add({
    user: owner,
    company: companyName,
    roles: ["user", "owner"],
  });

  `{comapny}_auth_cookies`
}


function registerCompanyUser(user, company, roles) {
    companyUsers.add({ user: user, company: company });
    userRoles.add({
      user: user,
      company: companyName,
      roles: roles,
    });
}