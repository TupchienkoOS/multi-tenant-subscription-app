import React from "react";
import { Spinner } from "reactstrap";

export const SpinnerComp = () => {
  return (
    <div className="middle-box text-center">
      <div className="ibox">
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="secondary" />
      </div>
    </div>
  );
};
