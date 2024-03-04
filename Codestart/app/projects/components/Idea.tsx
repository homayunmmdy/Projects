import { IdeasType } from "@/types/collection";
import Link from "next/link";
import React from "react";

const Idea = ({id, title, url, ideas }: IdeasType) => {
  return (
    <>
      <div key={id} className="p-7 rounded-xl border border-slate-500/30">
        <h3 className="text-xl font-semibold mb-7 text-white">{title}</h3>

        <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-4">
          {ideas.map((idea, index) => (
            <li
              key={index}
              className="font-medium text-gray-500 dark:text-gray-400"
            >
              {idea}
            </li>
          ))}
        </ol>

        <Link
          href={url}
          className="py-3 flex items-center justify-center w-full font-semibold rounded-md border border-white hover:border-purple-500 hover:bg-purple-500 text-white transition-all duration-500  dark:hover:bg-purple-500 dark:hover:text-white "
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className=" h-5 w-5 ms-3"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Idea;
