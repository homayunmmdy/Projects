const Back = () => {
  return (
    <div>
      <a href="https://codestart-eight.vercel.app/">
        <button
        style={{zIndex:"9999999"}}
          type="button"
          className="fixed z-50 top-[3%] left-[3%] flex items-center justify-center  px-2 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Back;
