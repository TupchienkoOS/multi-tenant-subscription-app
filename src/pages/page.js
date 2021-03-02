import React, { useEffect } from "react";
import { NavBarSide } from "./main-page/nav-bar-side";
import { NavBarTop } from "./main-page/nav-bar-top";
import { PageHeading } from "./main-page/page-heading";
import { PageContent } from "./main-page/page-content";
import { PageFooter } from "./main-page/page-footer";
import { AppContext } from "../App";
import DbApi from "../data/dbApi";
import Cookies from "js-cookie";
import { pages } from "../data/pages";
import { useHistory, useParams } from "react-router-dom";

//prevent navbarside rerender if no need
const Page = ({ onLogOut, userObj, role, page, ...rest }) => {
  const Component = pages[page] || pages["nosuchpage"];

  return (
    <div id="wrapper">
      <NavBarSide user={userObj} role={role} />
      <div id="page-wrapper" className="gray-bg">
        <NavBarTop
          onLogOut={onLogOut}
          notifications={userObj.notifications}
          messages={userObj.messages}
          role={role}
        />
        <PageHeading displayHeading={Component.displayName} />
        <PageContent role={role} user={userObj} Component={Component} />
        <PageFooter />
      </div>
    </div>
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
        return (
          <Page onLogOut={context} userObj={userObj} role={role} page={page} />
        );
      }}
    </AppContext.Consumer>
  );
};

PageContainer.displayName = "PageContainer";
export default PageContainer;
