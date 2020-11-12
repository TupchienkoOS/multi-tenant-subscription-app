import React from "react";
import cx from "classnames";

export const CheckBox = ({ id, value, hover, name, label, onchangeInput }) => {
  function onHover(e) {
    console.log("hover");
  }

  return (
    <div className="form-group">
      <div className="checkbox i-checks">
        <label
          className={cx({
            hover: !hover,
          })}
        >
          <div
            className={cx({
              "icheckbox_square-green hover": hover,
              "icheckbox_square-green checked": value === true,
              "icheckbox_square-green": value !== true,
            })}
          >
            <input
              id={id}
              type="checkbox"
              name={name}
              style={{ position: "absolute", opacity: 0 }}
              onChange={onchangeInput}
              onMouseEnter={onHover}
            />
          </div>
          <i></i> {label}
        </label>
      </div>
    </div>
  );
};
