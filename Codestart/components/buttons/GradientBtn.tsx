import React from "react";

interface Props {
  title: string
}
const GradientBtn = ({ title }:Props) => {
  return (
    <>
      <button
        type="button"
        className="text-white m-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {title}
      </button>
    </>
  );
};

export default GradientBtn;
