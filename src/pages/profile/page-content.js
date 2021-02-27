import React from "react";
import { useParams } from "react-router-dom";
import { pages } from "../../data/pages";

export const PageContent = (props) => {
  let { page } = useParams();

  const ComponentName = pages[page] || pages["nosuchpage"];

  return <ComponentName {...props} />;
};
