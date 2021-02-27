import React, { useEffect } from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";
import { AppContext } from "../App";
import DbApi from "../data/dbApi";
import Cookies from "js-cookie";
import { useHistory, useParams, Redirect } from "react-router-dom";

//prevent navbarside rerender if no need
const Page = ({ onLogOut, userObj, role, ...rest }) => {
  return userObj ? (
    <div id="wrapper">
      <NavBarSide user={userObj} role={role} />
      <div id="page-wrapper" className="gray-bg">
        <NavBarTop
          onLogOut={onLogOut}
          notifications={userObj.notifications}
          messages={userObj.messages}
          role={role}
        />
        <PageHeading />
        <PageContent role={role} user={userObj} />
        <PageFooter />
      </div>
    </div>
  ) : (
    <Redirect to="/nomatch" />
  );
};

Page.defaultProps = {};

const PageContainer = () => {
  const history = useHistory();
  let { role, page } = useParams();

  const id = Cookies.get([role]);

  const getCurrentUserById = () => {
    let currentUser;
    if (role === "user") {
      currentUser = DbApi.getUserById(id);
    } else if (role === "company") {
      currentUser = DbApi.getCompanyById(id);
    }
    return currentUser;
  };

  const userObj = getCurrentUserById();

  useEffect(() => {
    history.push(`/${role}/${page}/${id}`);
  }, []);

  return (
    <AppContext.Consumer>
      {(context) => {
        return <Page onLogOut={context} userObj={userObj} role={role} />;
      }}
    </AppContext.Consumer>
  );
};

PageContainer.displayName = "PageContainer";
export default PageContainer;
