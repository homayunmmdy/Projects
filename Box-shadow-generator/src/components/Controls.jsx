import React from "react";
import ColorInput from "./ColorInput";
import RangeInput from "./RangeInput";
import ToggleInput from "./toggleInput";

const Controls = ({ code, onChange }) => {
  return (
    <aside className="controls">
      <div className="main-frame">
        <div className="main-frame-title">
          <p>Controls</p>
        </div>
        <div className="main-frame-controls">
          <RangeInput
            label={"H-offset"}
            name={"HOffSet"}
            value={code}
            onChange={onChange}
            min={-180}
            max={180}
          />
          <RangeInput
            label={"V-offset"}
            name={"VOffSet"}
            value={code}
            onChange={onChange}
            min={-180}
            max={180}
          />
          <RangeInput
            label={"Blur"}
            name={"Blur"}
            value={code}
            onChange={onChange}
            max={200}
          />
          <RangeInput
            label={"Spread"}
            name={"Spread"}
            value={code}
            onChange={onChange}
            max={200}
          />
          <ColorInput
            label={"Color"}
            name={"Color"}
            value={code}
            onChange={onChange}
          />
          <RangeInput
            label={"Opacity"}
            name={"Opacity"}
            value={code}
            onChange={onChange}
            max={1}
            min={0}
            steps={0.01}
          />
          <ToggleInput
            label={"Inset"}
            name={"Inset"}
            value={code}
            onChange={onChange}
          />
        </div>
      </div>
    </aside>
  );
};

export default Controls;
