import React from "react";

export const Navigation = ({
  step,
  nextStep,
  prevStep,
  values,
  addCompany,
}) => {
  const stepsLength = 4;
  const isLastStep = () => {
    return step === stepsLength;
  };

  return (
    <div className="actions clearfix">
      <ul role="menu" aria-label="Pagination">
        <li className={step > 1 ? "" : "disabled"} onClick={() => prevStep()}>
          <a href="#previous" role="menuitem">
            Previous
          </a>
        </li>
        {!isLastStep() && (
          <li aria-hidden="false" onClick={() => nextStep()}>
            <a href="#next" role="menuitem">
              Next
            </a>
          </li>
        )}
        <li
          aria-hidden="true"
          style={{ display: !isLastStep() && "none" }}
          onClick={addCompany(values)}
        >
          <a href="#finish" role="menuitem">
            Finish
          </a>
        </li>
      </ul>
    </div>
  );
};
