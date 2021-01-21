import React, { useEffect } from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";
import { AppContext } from "../App";
import DbApi from "../data/dbApi";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Profile = ({ onLogOut, ...rest }) => {
  const usrId = Cookies.get("usrId");

  const getCurrentUserById = () => {
    const currentUser = DbApi.getUserById(usrId);
    return currentUser;
  };

  const user = getCurrentUserById();

  return (
    user && (
      <div id="wrapper">
        <NavBarSide user={user} />
        <div id="page-wrapper" className="gray-bg">
          <NavBarTop
            onLogOut={onLogOut}
            notifications={user.notifications}
            messages={user.messages}
          />
          <PageHeading />
          <PageContent />
          <PageFooter />
        </div>
      </div>
    )
  );
};

Profile.defaultProps = {};

const UserContainer = () => {
  const usrId = Cookies.get("usrId");

  const history = useHistory();

  useEffect(() => {
    history.push(`/user/profile/${usrId}`);
  }, []);

  return (
    <AppContext.Consumer>
      {(context) => {
        return <Profile onLogOut={context} />;
      }}
    </AppContext.Consumer>
  );
};

UserContainer.displayName = "UserContainer";
export default UserContainer;
