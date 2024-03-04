import React from "react";

const ToggleInput = ({ label, name, onChange }) => {
  return (
    <div className="checkbox-input">
      <label className="label">{label}</label>
      <div className="checkbox">
        <input
          type="checkbox"
          name={name}
          id={name}
          value="inset"
          onChange={(e) => onChange(e)}
        />
        <label className="toggle-button" htmlFor={name}>
          <p>
            <b>ON</b> <b>OFF</b>
          </p>
        </label>
      </div>
    </div>
  );
};

export default ToggleInput;
