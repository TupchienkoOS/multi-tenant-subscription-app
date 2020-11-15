import React from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    const { onLogOut } = this.props;
    return (
      <div id="wrapper">
        <NavBarSide />
        <div id="page-wrapper" className="gray-bg">
          <NavBarTop onLogOut={onLogOut} />
          <PageHeading />
          <PageContent />
          <PageFooter />
        </div>
      </div>
    );
  }
}

export default Profile;
