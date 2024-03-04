import React, { useState } from "react";

const OutputCode = ({ cssCode }) => {
  let cssStyle = cssCode();
  let OutPut = `box-shadow: ${cssStyle}; \n-webkit-box-shadow: ${cssStyle}; \n-moz-box-shadow: ${cssStyle};`;

  const [copyText, setCopyText] = useState("Copy");

  const handleCopy = () => {
    // Copy the output css to clipboard
    navigator.clipboard.writeText(OutPut);

    // Change the Copy button text to Copied
    setCopyText("Copied");

    // Change the Copy button text to Copy after 3 seconds
    setTimeout(() => {
      setCopyText("Copy");
    }, 3000);
  };

  return (
    <div className="code-container">
      <div className="code">
        <textarea value={OutPut} readOnly></textarea>
        <button onClick={handleCopy}>{copyText}</button>
      </div>
    </div>
  );
};

export default OutputCode;
