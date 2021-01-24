import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { AppContext } from "./App";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { rolesIdName as RolesIdName } from "./data/roles";

export const CompanyProfile = ({ onLogOut }) => {
  const compId = Cookies.get("compId");

  let { id } = useParams();
  return (
    <div>
      <a onClick={() => onLogOut(RolesIdName["company"])}>
        TEST COMPANY ID:{id}{" "}
      </a>
    </div>
  );
};

const CompanyContainer = () => {
  const compId = Cookies.get("compId");
  const history = useHistory();

  useEffect(() => {
    history.push(`/company/profile/${compId}`);
  }, []);
  return (
    <AppContext.Consumer>
      {(context) => {
        return <CompanyProfile onLogOut={context} />;
      }}
    </AppContext.Consumer>
  );
};
CompanyContainer.displayName = "CompanyContainer";
export default CompanyContainer;
