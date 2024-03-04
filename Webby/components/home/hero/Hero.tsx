import SiteConfig from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div>
      <div className="h-full w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl pt-10">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="block px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white  sm:text-5xl md:text-6xl">
                      <span className="sm:text-6xl"></span> {t("hero1")} {" "}
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                       {SiteConfig.siteName}
                      </span>
                      <br />
                      {t("hero2")}
                    </h1>
                  </div>

                  <p className="text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {t("description")}
                  </p>
                </div>

                <div className="border-t border-gray-700"></div>

                <div className="flex gap-3 space-x-4 justify-between lg:justify-start flex-wrap items-center text-white my-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/3.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/4.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/5.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/6.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                    </div>

                    <span className="text-black dark:text-white flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>

                  <div className="h-4 border-l border-gray-700"></div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div className="h-4 border-l border-gray-700"></div>
                  <Link href="/" target="_blank">
                  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{t("get_start")}</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div className="h-full w-full">
                  <div >
                  <Image
                        width={400}
                        height={400}
                        alt="website"
                        src="/images/web.avif"
                        className="h-full w-full"           
                                   />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
