import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-gray-200"></div>
      <footer className="text-sm leading-6 my-10 max-w-screen-xl mx-auto">
        <div className="sm:flex justify-between text-white ">
          <div className="mb-6 sm:mb-0 flex justify-center items-center	">
            <p>Copyright © {new Date().getFullYear()} CodeStart</p>
            <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
              <div className="flex justify-center text-center space-x-5">
                <Link
                  href="https://github.com/homayunmmdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/homayoun-mohammadi-a3590a283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </p>
          </div>
          <Link
            className="text-white"
            href="/"
          >
            Powered by Homayoun
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
