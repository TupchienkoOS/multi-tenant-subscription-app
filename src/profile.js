import React from "react";
import { NavBarSide } from "./profile/nav-bar-side";
import { NavBarTop } from "./profile/nav-bar-top";
import { PageHeading } from "./profile/page-heading";
import { PageContent } from "./profile/page-content";
import { PageFooter } from "./profile/page-footer";
import { users } from "./data/users";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        messages: [],
        notifications: [],
        avatar_small: "",
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const currentUser = users.filter((user) => (user.id = this.props.usrId))[0];
    console.log(currentUser);
    this.setState({ user: currentUser });
  }

  render() {
    const { onLogOut } = this.props;
    const { firstName, lastName, avatar_small, role } = this.state.user;
    return (
      <div id="wrapper">
        <NavBarSide user={this.state.user} />
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
