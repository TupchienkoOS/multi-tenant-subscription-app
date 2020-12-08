import React from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";
import { users } from "./data/users";
import { AppContext } from "./App";
import Cookies from "js-cookie";

const Profile = ({ onLogOut }) => {
  const getCurrentUserById = () => {
    console.log(Cookies.get("usrId"));
    const currentUser = users.filter((user) => {
      return user.id === +Cookies.get("usrId");
    })[0];
    return currentUser;
  };

  const { notifications, messages } = getCurrentUserById();

  return (
    <div id="wrapper">
      <NavBarSide user={getCurrentUserById} />
      <div id="page-wrapper" className="gray-bg">
        <NavBarTop
          onLogOut={onLogOut}
          notifications={notifications}
          messages={messages}
        />
        <PageHeading />
        <PageContent />
        <PageFooter />
      </div>
    </div>
  );
};

const UserContainer = () => {
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
