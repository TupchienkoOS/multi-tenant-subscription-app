import React from "react";

export const Button = ({ id, name, type, label, className, onSubmit }) => {
  return (
    <button type={type} className={className} onClick={onSubmit}>
      {label}
    </button>
  );
};
