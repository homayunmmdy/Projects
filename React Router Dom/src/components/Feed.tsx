
const Feed = () => {
  return (
    <div>
        <ul
        aria-label="Changelog feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
      >
        <li
          role="article"
          className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white"
        >
          <div className="flex flex-col flex-1 gap-4">
            <h4 className="text-lg font-medium text-emerald-500">
              v1.2.6{" "}
              <span className="text-lg font-normal text-slate-500">
                {" "}
                - 2023-02-08
              </span>{" "}
            </h4>
            <p className=" text-slate-500">
              This provides a very significant performance boost on pages with a
              huge number of DOM nodes, but there's a chance it could be a
              breaking change in very rare edge cases we haven't thought of.
              Update several dependencies, including postcss-js.
            </p>
          </div>
        </li>
        <li
          role="article"
          className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white"
        >
          <div className="flex flex-col flex-1 gap-4">
            <h4 className="text-lg font-medium text-emerald-500">
              v1.2.5{" "}
              <span className="text-lg font-normal text-slate-500">
                {" "}
                - 2023-01-21
              </span>{" "}
            </h4>
            <p className="text-slate-500">
              Pass extended color palette to theme closures so it can be used
              without installing Tailwind when using npx tailwindcss.
            </p>
            <ul className="pl-5 list-disc text-slate-500 marker:text-emerald-500">
              <li>Remove outdated focus style fix in Preflight</li>
              <li>Fix error when not using a config file with postcss</li>
              <li>
                Fix issue with resolveConfig not being importable in Next.js
              </li>
            </ul>
          </div>
        </li>
        <li
          role="article"
          className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white"
        >
          <div className="flex flex-col flex-1 gap-4">
            <h4 className="text-lg font-medium text-emerald-500">
              v1.2.4{" "}
              <span className="text-lg font-normal text-slate-500">
                {" "}
                - 2023-01-18
              </span>{" "}
            </h4>
            <p className="text-slate-500">
              Although this is a bugfix it could affect your site if you were
              working around the bug in your own code by not prefixing the group
              className.{" "}
            </p>
            <ul className="pl-5 list-disc text-slate-500 marker:text-emerald-500">
              <li>Added utilities for screenreader visibility</li>
              <li>First, last, even, and odd child variants</li>
              <li>Disabled variant</li>
              <li>Visited variant</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Feed
