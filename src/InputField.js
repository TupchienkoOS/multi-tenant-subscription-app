import React from "react";

export const InputField = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChangeInput,
  error,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};
