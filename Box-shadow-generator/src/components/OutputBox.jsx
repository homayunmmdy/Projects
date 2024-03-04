import React from "react";

const OutputBox = ({ cssCode }) => {
  return (
    <div className="box-container">
      <div className="box" style={{ boxShadow: cssCode() }}></div>
    </div>
  );
};

export default OutputBox;
