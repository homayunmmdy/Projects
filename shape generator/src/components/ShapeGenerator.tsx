// ShapeGenerator.js
import React, { useState } from "react";
import Shape from "./Shape";

const ShapeGenerator = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [shape, setShape] = useState("rectangle");

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShape(e.target.value);
  };

  const generateCSSCode = () => {
    let cssCode = "";
    if (shape === "rectangle") {
      cssCode = `
        width: ${width}px;
        height: ${height}px;
        background-color: blue;
      `;
    } else if (shape === "circle") {
      cssCode = `
        width: ${width}px;
        height: ${height}px;
        border-radius: 50%;
        background-color: red;
      `;
    }
    return cssCode;
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">Shape Generator</h2>
    <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <label htmlFor="width" className="block text-gray-700 font-semibold mb-1">
            Width:
          </label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={handleWidthChange}
            className="border border-gray-300 px-3 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="height" className="block text-gray-700 font-semibold mb-1">
            Height:
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="border border-gray-300 px-3 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="shape" className="block text-gray-700 font-semibold mb-1">
            Shape:
          </label>
          <select
            id="shape"
            value={shape}
            onChange={handleShapeChange}
            className="border border-gray-300 px-3 py-2 w-full rounded-md"
          >
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>
      </div>
      {width && height && <Shape width={width} height={height} shape={shape} />}
      {width && height && (
        <div className="mt-4">
          <div className="relative max-w-2xl mx-auto mt-24">
            <div className="bg-gray-900 text-white p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Code:</span>
                <button
                  className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                  data-clipboard-target="#code"
                >
                  Copy
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre className="text-gray-300">
                  <code> {generateCSSCode()}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShapeGenerator;
