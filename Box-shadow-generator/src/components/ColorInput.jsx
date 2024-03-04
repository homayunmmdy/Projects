import React from "react";

const ColorInput = ({ label, name, value, onChange }) => {
  return (
    <div className="color-input">
      <label className="label">{label}</label>
      <label className="color">
        <input
          type="color"
          name={name}
          id={name}
          onChange={(e) => onChange(e)}
        />
        {value?.Color || "#000000"}
      </label>
    </div>
  );
};

export default ColorInput;
