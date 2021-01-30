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

const Profile = ({ onLogOut, userObj, role, ...rest }) => {
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
        <PageContent role={role} />
        <PageFooter />
      </div>
    </div>
  ) : (
    <Redirect to="/nomatch" />
  );
};

Profile.defaultProps = {};

const ProfileContainer = () => {
  const history = useHistory();
  let { role } = useParams();

  const id = Cookies.get([role]);

  const getCurrentUserById = () => {
    debugger;
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
    history.push(`/${role}/profile/${id}`);
  }, []);

  return (
    <AppContext.Consumer>
      {(context) => {
        return <Profile onLogOut={context} userObj={userObj} role={role} />;
      }}
    </AppContext.Consumer>
  );
};

ProfileContainer.displayName = "ProfileContainer";
export default ProfileContainer;
