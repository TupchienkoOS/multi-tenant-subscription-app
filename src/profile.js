import React from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";

export const Profile = ({ onLogOut, user }) => {
  const { notifications, messages } = user;
  return (
    <div id="wrapper">
      <NavBarSide user={user} />
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
