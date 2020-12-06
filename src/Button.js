import React from "react";

export const Button = ({ id, name, type, label, className, onClick }) => {
  return (
    <button
      id={id}
      name={name}
      type={type}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
