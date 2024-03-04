import React from "react";
import OutputBox from "./OutputBox";
import OutputCode from "./OutputCode";

const Output = (props) => {
  const hexToRgba = (hex, opacity) => {
    let r, g, b;

    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    return `rgba(${+r}, ${+g}, ${+b}, ${opacity})`;
  };

  const getCode = () => {
    const { HOffSet, VOffSet, Blur, Spread, Color, Opacity, Inset } =
      props.code;

    return `${HOffSet}px ${VOffSet}px ${Blur}px ${Spread}px ${hexToRgba(
      Color,
      Opacity
    )} ${Inset}`;
  };

  return (
    <aside className="output">
      <div className="main-frame">
        <div className="main-frame-title">
          <p>Output</p>
        </div>
        <div className="main-frame-output">
          <OutputBox cssCode={getCode} />
          <OutputCode cssCode={getCode} />
        </div>
      </div>
    </aside>
  );
};

export default Output;
