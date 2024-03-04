import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col bg-cp-color-4 justify-start items-start text-sm h-max w-screen px-8 sm:px-[10%] overflow-hidden sm:py-8 py-16"
      id="link-footer"
    >
      <div
        className="flex sm:gap-4 gap-8 md:flex-row flex-col w-full sm:justify-between justify-start"
        id="link-footer-width-wrapper"
      >
        <div className="flex flex-col sm:items-start sm:gap-2 gap-8">
          <div className="flex sm:flex-col sm:items-start sm:w-auto w-full flex-row sm:gap-2 gap-1 ">
            <nav
              id="link-footer-codepen-links"
              aria-label="Links about CodePen"
              className="sm:flex-row flex sm:gap-2 gap-0 w-[50%] flex-col"
            >
              <h4 className="text-white pr-2">CodePen</h4>
              <a href="/about/" className="hover:text-white text-cp-color-5">
                About
              </a>
              <a
                href="https://blog.codepen.io/"
                className="hover:text-white text-cp-color-5"
              >
                Blog
              </a>
              <a
                href="https://blog.codepen.io/radio/"
                className="hover:text-white text-cp-color-5"
              >
                Podcast
              </a>
              <a
                href="https://blog.codepen.io/documentation/"
                className="hover:text-white text-cp-color-5"
              >
                Documentation
              </a>
              <a href="/support/" className="hover:text-white text-cp-color-5">
                Support
              </a>
              <a
                href="https://discover.buysellads.com/codepen"
                className="hover:text-white text-cp-color-5"
              >
                Advertising
              </a>
            </nav>
            <nav
              id="link-footer-for-links"
              className="sm:flex-row flex sm:gap-2 gap-0 flex-col"
              aria-label="CodePen for different uses"
            >
              <h4 className="text-white pr-2">For</h4>
              <a
                href="/features/teams"
                className="hover:text-white text-cp-color-5"
              >
                Teams
              </a>
              <a
                href="/features/education"
                className="hover:text-white text-cp-color-5"
              >
                Education
              </a>
              <a
                href="/features/privacy"
                className="hover:text-white text-cp-color-5"
              >
                Privacy
              </a>
              <a
                href="/features/embeds"
                className="hover:text-white text-cp-color-5"
              >
                Embeds
              </a>
              <a
                href="/features/asset-hosting"
                className="hover:text-white text-cp-color-5"
              >
                Asset Hosting
              </a>
            </nav>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-2 gap-1 sm:items-start sm:w-auto w-full ">
            <nav
              id="link-footer-social-links"
              className="sm:flex-row flex sm:gap-2 gap-0  w-[50%] flex-col"
              aria-label="CodePen on Social Media"
            >
              <h4 className="text-white pr-2">Social</h4>
              <a
                href="https://www.youtube.com/c/CodePenOfficial"
                className="hover:text-white text-cp-color-5"
              >
                YouTube
              </a>
              <a
                href="https://twitter.com/CodePen"
                className="hover:text-white text-cp-color-5"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/codepen/"
                className="hover:text-white text-cp-color-5"
              >
                Instagram
              </a>
              <a
                href="https://fosstodon.org/@codepen"
                className="hover:text-white text-cp-color-5"
              >
                Mastodon
              </a>
            </nav>
            <nav
              id="link-footer-community-links"
              className="sm:flex-row flex sm:gap-2 gap-0 flex-col"
              aria-label="CodePen Community"
            >
              <h4 className="text-white pr-2">Community</h4>
              <a href="/spark/" className="hover:text-white text-cp-color-5">
                Spark
              </a>
              <a
                href="/challenges/"
                className="hover:text-white text-cp-color-5"
              >
                Challenges
              </a>
              <a href="/topics/" className="hover:text-white text-cp-color-5">
                Topics
              </a>
              <a
                href="https://blog.codepen.io/documentation/code-conduct/"
                className="hover:text-white text-cp-color-5"
              >
                Code of Conduct
              </a>
            </nav>
          </div>
        </div>
        <div
          className="flex flex-col relative text-xs text-cp-color-5"
          id="link-footer-copyright"
        >
          <h1
            className="fill-white pb-2"
            data-component="Logo"
            data-test-id="logo"
          >
            <a href="/" className="sm:hidden block">
              <svg
                viewBox="0 0 100 100"
                fill="#fff"
                stroke="#fff"
                className="h-8 w-auto"
              >
                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
              </svg>
            </a>
            <a href="/" className="hidden sm:block">
              <svg
                fill="none"
                stroke="#fff"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-auto"
                aria-label="CodePen"
              >
                <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
              </svg>
            </a>
          </h1>
          <p>©2023 CodePen</p>
          <p className="slogan">
            <em>Demo or it didn&apos;t happen.</em>
          </p>
          <p className="SiteFooter-module_links-MJ8co">
            <a
              href="https://blog.codepen.io/documentation/terms-of-service/"
              className="hover:text-white"
            >
              Terms of Service
            </a>
            ·
            <a
              href="https://blog.codepen.io/documentation/privacy-policy/"
              className="hover:text-white"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
