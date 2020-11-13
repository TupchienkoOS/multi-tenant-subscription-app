import React from "react";
import cx from "classnames";

export const CheckBox = ({
  id,
  value,
  hover,
  name,
  label,
  onChangeInput,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className="form-group">
      <div className="checkbox i-checks">
        <label
          htmlFor={id}
          className={cx({
            hover: !hover,
          })}
        >
          <div
            className={cx({
              "icheckbox_square-green hover": hover,
              "icheckbox_square-green checked": value === true,
              "icheckbox_square-green": !value,
            })}
          >
            <input
              id={id}
              type="checkbox"
              name={name}
              style={{ position: "absolute", opacity: 0 }}
              onChange={onChangeInput}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
          <i></i> {label}
        </label>
      </div>
    </div>
  );
};
