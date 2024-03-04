import SiteConfig from "@/config/site";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslations("navbar");

  return (
    <>
      <footer className="bg-white shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              title={SiteConfig.siteName}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
               {SiteConfig.siteName}
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-700 me-4 md:me-6">
                  {t("aboutus")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  title={t("Privacy_Policy")}
                  className="hover:text-blue-700 me-4 md:me-6"
                >
                  {t("Privacy_Policy")}
                </Link>
              </li>
              <li>
                <Link href="/" title={t("contactus")} className="hover:text-blue-700">
                  {t("contactus")}
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="px-4 py-6  md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © {new Date().getFullYear()} <Link href="/">{SiteConfig.siteName}</Link> {" "}
             {t("copyright")}.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="#"
                title={t("youtube")}
                rel="nofollow"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaYoutube className="w-4 h-4" />
                <span className="sr-only">{t("youtube")}</span>
              </Link>
              <Link
                href="#"
                title={t("linkedin")}
                rel="nofollow"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedinIn className="w-4 h-4" />
                <span className="sr-only">{t("linkedin")}</span>
              </Link>
              <Link
                href="#"
                title={t("x")}
                rel="nofollow"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaXTwitter />
                <span className="sr-only">title={t("x")}</span>
              </Link>
              <Link
                href="#"
                title={t("github")}
                rel="nofollow"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-4 h-4" />
                <span className="sr-only">{t("github")}</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
