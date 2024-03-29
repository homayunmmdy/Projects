"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-transparent border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              Code
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Start
              </span>
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
            >
              <CiSearch className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search z-50"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {isOpen && (
              <div className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 z-40">
                <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Close navigation</span>
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 overflow-visible"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <li>
                      <Link
                        href="/explore"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cssToolkit"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        CSS Toolkit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/DSA"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        DSA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/react"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        React
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contactus"
                        className="text-white hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                      >
                        Contactus
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0   ">
              <li>
                <Link
                  href="/explore"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/cssToolkit"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  CSS Toolkit
                </Link>
              </li>
              <li>
                <Link
                  href="/DSA"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  DSA
                </Link>
              </li>
              <li>
                <Link
                  href="/react"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
