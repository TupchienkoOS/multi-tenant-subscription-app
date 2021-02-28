import React, { useState } from "react";
import { SideBarItems } from "./side-bar-items";
import { Link } from "react-router-dom";

const sideBarItems = [
  { id: 1, name: "YOUR COMPANIES" },
  { id: 2, name: "COMPANIES" },
];

const subItems = [
  { id: 1, name: "TEST1", itemId: 1 },
  { id: 2, name: "TEST2", itemId: 2 },
];

export const NavBarSide = ({ user, role }) => {
  const { firstName, lastName, name, avatarSmall } = user;

  const [toggleState, setToggleState] = useState();

  const toggle = () => {
    setToggleState(toggleState === "show" ? "" : "show");
  };

  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <Link to={`/${role}/profile/${user.id}`}>
                <img
                  alt="profile-icon"
                  className="avatar-small"
                  src={require(`../../img/${avatarSmall}`).default}
                />
              </Link>
              <span data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="block m-t-xs font-bold">
                  {name + " " + (lastName || "")}
                </span>
                <span
                  className="text-muted text-xs block"
                  onClick={() => toggle()}
                >
                  {role}
                  <b className="caret"></b>
                </span>
              </span>
              <ul
                className={`dropdown-menu animated fadeInRight m-t-xs ${toggleState}`}
              >
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
