import React from "react";

export const FinishStep = () => {
  return (
    <div className="content clearfix">
      <fieldset className="body current">
        <h2>Terms and Conditions</h2>
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          className="required"
        />{" "}
        <label htmlFor="acceptTerms">
          I agree with the Terms and Conditions.
        </label>
      </fieldset>
    </div>
  );
};
