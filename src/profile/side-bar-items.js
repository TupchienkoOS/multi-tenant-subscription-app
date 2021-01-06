import React from "react";

export const SideBarItems = ({ items, subitems }) => {
  const fiteredSubItems = (itemId) => {
    return subitems.filter((subitem) => subitem.itemId === itemId);
  };
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <a href="index.html">
            <i className="fa fa-th-large"></i>{" "}
            <span className="nav-label">{item.name}</span>{" "}
            <span className="fa arrow"></span>
          </a>
          {fiteredSubItems(item.id).map((subitem) => (
            <ul className="nav nav-second-level collapse in" key={subitem.id}>
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
