import React from "react";

const progressSteps = [
  { id: 1, name: "Account" },
  { id: 2, name: "Profile" },
  { id: 3, name: "Warning" },
  { id: 4, name: "Finish" },
];

export const Progress = ({ step }) => {
  const status = (id) => {
    if (id === step) return "current";
    else if (id < step) return "done";
    else return "disabled";
  };

  return (
    <div className="steps clearfix">
      <ul role="tablist">
        {progressSteps.map((item) => {
          return (
            <li key={item.id} role="tab" className={status(item.id)}>
              <a id="form-t-0">
                <span className="current-info audible">current step: </span>
                <span className="number">{item.id}</span> {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
