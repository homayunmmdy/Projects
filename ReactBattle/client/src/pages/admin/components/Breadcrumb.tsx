import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const page = location.pathname.slice(7)
  return (
    <div className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <Link
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="/admin"
          >
            admin
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </Link>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to={`/admin/${page}`}
          >
            {page}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
            to={`/admin/${page}`}
          >
            {page}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
