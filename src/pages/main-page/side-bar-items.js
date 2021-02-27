import React, { useState } from "react";

export const SideBarItems = ({ items, subitems }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => (event) => {
    event.preventDefault();
    if (index === clicked) {
      setClicked(false);
    } else {
      setClicked(index);
    }
  };

  const fiteredSubItems = (itemId) => {
    return subitems.filter((subitem) => subitem.itemId === itemId);
  };
  return (
    <>
      {items.map((item) => (
        <li
          key={item.id}
          className={clicked === item.id ? "active" : null}
          onClick={toggle(item.id)}
        >
          <a href="/#">
            <i className="fa fa-th-large"></i>{" "}
            <span className="nav-label">{item.name}</span>{" "}
            <span className="fa arrow"></span>
          </a>
          {fiteredSubItems(item.id).map((subitem) => (
            <ul
              className={
                clicked === item.id
                  ? "nav nav-second-level collapse in"
                  : "nav nav-second-level collapse"
              }
              key={subitem.id}
            >
              <li>
                <a href="index.html">{subitem.name}</a>
              </li>
            </ul>
          ))}
        </li>
      ))}
    </>
  );
};
