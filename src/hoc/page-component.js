import React from "react";
import { pages } from "../data/pages";
import { Companies } from "../pages/companies";

export const PageComponent = (pageName, ...rest) => {
  const page = () => {
    pages.filter((page) => {
      return page.name === pageName;
    });
  };

  const СomponentName = page.component;

  return <СomponentName {...rest} />;
};
