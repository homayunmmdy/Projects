import React from "react";

type Props = {};

export default function HomeNav({}: Props) {
  return (
    <div className="w-[100%] text-white flex flex-row items-center justify-around p-[2%] g-4 overflow-hidden ">
      <a href="/" className="sm:hidden  flex items-center px-4">
        <svg
          viewBox="0 0 100 100"
          fill="#fff"
          stroke="#fff"
          className="h-8 w-auto"
        >
          <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
        </svg>
      </a>
      <div className="flex items-center mr-4 w-screen mx-auto ">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg gap-2 bg-cp-color-6 focus-within:bg-cp-color-6/80 overflow-hidden">
          <div className="grid place-items-center h-6 sm:h-full w-6 sm:w-12 pl-2 text-cp-color-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9B9DAD"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className=" peer h-full w-full outline-none text-md font-semibold  bg-cp-color-6 focus-within:bg-cp-color-6/80  text-cp-color-7 sm:pl-0 pl-2 pr-4"
            type="text"
            id="search"
            placeholder="Search CodePen.."
          />
        </div>
      </div>
      <a
        data-test-id="signup-button"
        href="/accounts/signup/user/free"
        className=" w-[100px] h-[48px] bg-cp-color-11 hover:bg-cp-color-10 break-keep text-black hover:text-white text-[.5rem] sm:text-sm p-4 py-2 rounded mr-2 mb-1 grid place-content-center"
        data-color="green"
      >
        Sign Up
      </a>
      <a
        data-test-id="login-button"
        href="/login"
        className=" w-[100px] h-[48px] bg-cp-color-12 hover:bg-cp-color-13 text-white text-[.5rem] sm:text-sm p-4 py-2 px-4 rounded mr-2 mb-1 grid place-content-center"
      >
        Log In
      </a>
    </div>
  );
}
