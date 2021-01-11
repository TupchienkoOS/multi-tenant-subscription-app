import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { AppContext } from "./App";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const CompanyProfile = ({ onLogOut }) => {
  const compId = Cookies.get("compId");

  useEffect(() => {
    if (typeof compId === "undefined") {
      onLogOut();
    }
  }, []);

  let { id } = useParams();
  return (
    <div>
      <a onClick={() => onLogOut()}>TEST COMPANY ID:{id} </a>
    </div>
  );
};

const CompanyContainer = () => {
  const compId = Cookies.get("compId");

  const history = useHistory();

  useEffect(() => {
    history.push(`/company/${compId}`);
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
