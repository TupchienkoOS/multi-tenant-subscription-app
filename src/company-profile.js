import React from "react";
import { useParams } from "react-router-dom";
export const CompanyProfile = () => {
  let { id } = useParams();
  return <div>TEST COMPANY ID:{id} </div>;
};
