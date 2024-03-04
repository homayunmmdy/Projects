"use client";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="  left-0 right-0 top-0 z-50 flex fixed min-w-full h-20 items-center justify-between shadow-sm">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="hidden gap-4 md:flex items-center">
          <Link href="/">
            <div className="flex flex-row gap-1 items-center">
              <Image
                className="relative z-0 h-8 w-auto"
                src="/code.png"
                alt="Logo"
                priority={true}
                width={96}
                height={96}
              />
              <div className="antialiased opacity-75 text relative text-[1rem] font-extrabold leading-relaxed">
                codepen v2
              </div>
            </div>
          </Link>
          <ThemeToggle />
        </div>
        {/* For mobile view */}
        <div className="flex flex-row gap-2 md:hidden items-center">
          <Link href="/">
            <Image
              className="relative z-0 h-8 w-auto"
              src="/code.png"
              alt="Logo"
              priority={true}
              width={96}
              height={96}
            />
          </Link>
          <ThemeToggle />
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
