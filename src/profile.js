import React from "react";
import { NavBarSide } from "./nav-bar-side";
import { NavBarTop } from "./nav-bar-top";
import { PageHeading } from "./page-heading";
import { PageContent } from "./page-content";
import { PageFooter } from "./page-footer";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <div id="wrapper">
        <NavBarSide />

        <div id="page-wrapper" className="gray-bg">
          <NavBarTop />
          <PageHeading />
          <PageContent />
          <PageFooter />
        </div>
      </div>
    );
  }
}

export default Profile;
