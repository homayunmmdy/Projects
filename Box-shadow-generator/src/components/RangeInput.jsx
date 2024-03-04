import React from "react";

const RangeInput = ({ label, name, min, max, value, onChange, steps }) => {
  return (
    <div className="range-input">
      <label className="label">{label}</label>
      <div className="range">
        <input
          type="range"
          name={name}
          id={name}
          min={min}
          max={max}
          onChange={(e) => onChange(e)}
          step={steps || 1}
          value={value[name]}
        />
      </div>
      <div className="value">
        <input
          type="number"
          minLength={min}
          maxLength={max}
          name={name}
          value={value[name]}
          onChange={(e) => onChange(e)}
          step={steps || 1}
        />
      </div>
    </div>
  );
};

export default RangeInput;
