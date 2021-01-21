import React from "react";
import { SideBarItems } from "./side-bar-items";
//import avatarSmall from "../img/profile_small.jpg";
const sideBarItems = [
  { id: 1, name: "PROFILE" },
  { id: 2, name: "COMPANIES" },
];
const subItems = [
  { id: 1, name: "TEST1", itemId: 1 },
  { id: 2, name: "TEST2", itemId: 2 },
];
export const NavBarSide = ({ user }) => {
  const { firstName, lastName, role, avatarSmall } = user;

  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <img
                alt="profile-icon"
                className="rounded-circle"
                src={avatarSmall}
              />
              <span data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="block m-t-xs font-bold">
                  {firstName + " " + lastName}
                </span>
                <span className="text-muted text-xs block">
                  {role}
                  <b className="caret"></b>
                </span>
              </span>
              <ul className="dropdown-menu animated fadeInRight m-t-xs">
                <li>
                  <a className="dropdown-item" href="profile.html">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="contacts.html">
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="mailbox.html">
                    Mailbox
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="login.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div className="logo-element">IN+</div>
          </li>
          <SideBarItems items={sideBarItems} subitems={subItems} />
        </ul>
      </div>
    </nav>
  );
};
