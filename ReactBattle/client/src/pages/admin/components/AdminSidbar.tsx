import AdminNavLink from "./AdminNavLink";

const AdminSidbar = () => {
  return (
    <>
      <div
        className="sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0"
      >
        <span className="absolute top-4 right-4 block cursor-pointer xl:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <div className="mx-[56px] mt-[50px] flex items-center">
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            ReactBattle <span className="font-medium">Admin</span>
          </div>
        </div>
        <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"></div>
        {/* <ul className="">
          <a href="/horizon-tailwind-react/admin/default">
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-bold text-brand-500 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>{" "}
                </span>
                <p className="leading-1 flex ms-4 font-bold text-navy-700 dark:text-white">
                  Main Dashboard
                </p>
              </li>
              <div className="absolute top-px h-9 w-1 rounded-lg bg-brand-500 end-0 dark:bg-brand-400"></div>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/nft-marketplace">
            <div className="">
              <li >
                <span >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>{" "}
                </span>
                <p >
                  NFT Marketplace
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/data-tables">
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>{" "}
                </span>
                <p className="leading-1 flex ms-4 font-medium text-gray-600">
                  Data Tables
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/profile">
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>{" "}
                </span>
                <p className="leading-1 flex ms-4 font-medium text-gray-600">
                  Profile
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/auth/sign-in">
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                  </svg>{" "}
                </span>
                <p className="leading-1 flex ms-4 font-medium text-gray-600">
                  Sign In
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/rtl/rtl">
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8">
                <span className="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>{" "}
                </span>
                <p className="leading-1 flex ms-4 font-medium text-gray-600">
                  RTL Admin
                </p>
              </li>
            </div>
          </a>
        </ul> */}
        <AdminNavLink />
        <div className="flex justify-center">
          <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
            <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
                  fill="white"
                ></path>
                <path
                  d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="mt-16 flex h-fit flex-col items-center">
              <p className="text-lg font-bold text-white">Upgrade to PRO</p>
              <p className="mt-1 px-4 text-center text-sm text-white">
                Improve your development process and start doing more with
                Horizon UI PRO!
              </p>
              <a
                target="blank"
                className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
              >
                Upgrade to PRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidbar;
