import "./App.css";
import arrow from "./assets/img/arrow.svg";
import radial from "./assets/img/radial.svg";
import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { ChromePicker, ColorResult } from "react-color"; 

function App() {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#41417B");
  const [direction, setDirection] = useState("linear-gradient");
  const [generatedColors, setGeneratedColors] = useState<string[]>([]);
  const [orientation, setOrientation] = useState("to right bottom");
  const [error, setError] = useState("");
// @ts-expect-error: Uninitialized variable
const [invertedColor1, setInvertedColor1] = useState("");
// @ts-expect-error: Uninitialized variable
const [invertedColor2, setInvertedColor2] = useState("");

  useEffect(() => {
    generateColors();
  }, [color1, color2]);

  const changeOrientation = (ori : string) => {
    setDirection(ori === "circle" ? "radial-gradient" : "linear-gradient");
    setOrientation(ori);
  };

  const generateColors = () => {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      const colors = chroma.scale([color1, color2]).mode("lch").colors(5);
      setGeneratedColors(colors.slice(1, 4));

      setInvertedColor1(checkContrast(color1));
      setInvertedColor2(checkContrast(color2));

      setError("");
    } else {
      setError("Colors are not valid.");
    }
  };

  const checkContrast = (color:string) => {
    const contrast = chroma(color).luminance();
    return contrast > 0.6 ? "#000" : "#fff";
  };

  const handleColorChange = (color:string, type:string) => {
    if (type === "color1") {
      setColor1(color);
    } else {
      setColor2(color);
    }
  };

  const ulStyle = {
    backgroundImage: `${direction}(${orientation},${color1},${generatedColors.join(
      ","
    )},${color2})`,
  };
  const cssCode = `${direction}(${orientation},${color1},${generatedColors.join(
    ","
  )},${color2});`;

  return (
    <div
      className="flex items-center bg-gray-900 justify-center md:fixed h-full inset-0 px-10"
      style={ulStyle}
    >
      <div className="px-4 py-6">
        <h1 className="md:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-center text-2xl">
          Generate a CSS Color Gradient
        </h1>
        <h2 className="text-xl text-white text-center py-3 mt-2">
          Choose orientation
        </h2>
        <div className="flex items-center justify-center p-2 gap-2 flex-wrap md:gap-5">
          <button title="to top" onClick={() => changeOrientation("to top")}>
            <img src={arrow} alt="arrow to top" />
          </button>

          <button
            title="to right top"
            onClick={() => changeOrientation("to right top")}
          >
            <img
              src={arrow}
              alt="arrow to right top"
              className="transform rotate-45"
            />
          </button>

          <button
            title="to right"
            onClick={() => changeOrientation("to right")}
          >
            <img
              src={arrow}
              alt="arrow to right"
              className="transform rotate-90"
            />
          </button>

          <button
            title="to right bottom"
            onClick={() => changeOrientation("to right bottom")}
          >
            <img
              src={arrow}
              alt="arrow to right bottom"
              className="rotate-135"
            />
          </button>

          <button
            title="to bottom"
            onClick={() => changeOrientation("to bottom")}
          >
            <img
              src={arrow}
              alt="arrow to bottom"
              className="transform rotate-180"
            />
          </button>

          <button
            title="to bottom left"
            onClick={() => changeOrientation("to bottom left")}
          >
            <img
              src={arrow}
              alt="arrow to bottom left"
              className="rotate-225"
            />
          </button>

          <button title="to left" onClick={() => changeOrientation("to left")}>
            <img
              src={arrow}
              alt="arrow to left"
              className="transform -rotate-90"
            />
          </button>

          <button
            title="to left top"
            onClick={() => changeOrientation("to left top")}
          >
            <img
              src={arrow}
              alt="arrow to left top"
              className="transform rotate-180"
            />
          </button>

          <button onClick={() => changeOrientation("circle")}>
            <img src={radial} alt="radial" className="px-1.5" />
          </button>
        </div>
        <div className="text-white text-center py-2 rounded mb- w-40 mx-auto">
          <h2 className="bg-amber-700">{error}</h2>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex gap-5 justify-center items-center flex-wrap">
            <ChromePicker
              color={color1}
              onChange={(color:ColorResult) => handleColorChange(color.hex, "color1")}
            />
            <ChromePicker
              color={color2}
              onChange={(color:ColorResult) => handleColorChange(color.hex, "color2")}
            />
          </div>
        </div>
        <div className="box md:w-[640px] w-[350px] h-auto mx-auto break-all mt-4 p-2 ">
          <p className="p-3 text-gray-200 font-mono text-base md:text-xl text-center font-semibold">
            <span className="text-gray-100">background-image: </span> {cssCode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
