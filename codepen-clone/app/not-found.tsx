import Icons from '@/components/Icons';
import type { Metadata } from 'next';
import NavLink from 'next/link'

export const metadata: Metadata = {
  title: "codepen v2 | Page not found",
  description: "Test HTML, CSS and JS code with live preview.",
};

function Notfound() {
    
  return (
    <div className="flex-col flex-center min-h-[80vh] justify-center">
      <div className="blue_gradient font-bold pb-auto text-[2rem] md:text-[3.75rem]">
        Page not Found...
      </div>
      <div className="text-black/50 dark:text-white/50">
        The page you&apos;re searching for does not exist.
      </div>
      <NavLink
        className="flex flex-center dark:text-white/75 text-black/50 bg-slate-300/75 hover:bg-slate-400/50 dark:bg-slate-900/75 rounded-full p-4 m-3 dark:hover:bg-slate-900/50"
        href="/"
      >
        <Icons.ChevronLeft className="mr-2 h-4 w-4" />
        Back to home
      </NavLink>
    </div>
  );
}

export default Notfound