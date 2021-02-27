import React from "react";

export const PageContent = ({ Component, role, user }) => {
  return <Component role={role} user={user} />;
};
