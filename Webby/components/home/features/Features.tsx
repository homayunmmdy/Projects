import React from "react";
import { useTranslations } from "next-intl";

const Features = () => {
    const t = useTranslations("features");

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <section
          className="relative block px-6 py-10 md:py-20 md:px-10"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-900 dark:text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              {t("titr")}
            </span>
            <h2 className="block w-full bg-gradient-to-b from-gray-700 to-gray-900 dark:from-white dark:to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
             {t("title")}
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="relative group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <div className="relative rounded-m bg-gray-100 dark:bg-gray-900 p-8 text-center shadow-lg transition duration-200 hover:scale-110 ">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-black dark:text-white icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="17" y1="17" x2="17" y2="17.01"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-900  dark:text-gray-400">
                  {t("card_title_1")}
                </h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900  dark:text-gray-400">
                  {t("card_desc_1")}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <div className="relative bg-gray-100 dark:bg-gray-900  rounded-m  p-8 text-center shadow-lg transition duration-200 hover:scale-110 ">
                <div
                  className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-black dark:text-white icon-tabler icon-tabler-bolt"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-900  dark:text-gray-400">
                {t("card_title_2")}
                </h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900  dark:text-gray-400">
                {t("card_desc_2")}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <div className="relative rounded-m bg-gray-100 dark:bg-gray-900  p-8 text-center shadow-lg transition duration-200 hover:scale-110 ">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-black dark:text-white icon-tabler icon-tabler-tools"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-900  dark:text-gray-400">
                {t("card_title_3")}
                </h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900  dark:text-gray-400">
                {t("card_desc_3")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
