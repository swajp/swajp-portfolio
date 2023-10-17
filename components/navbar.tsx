"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Domů",
    href: "/",
  },
  {
    label: "Služby",
    href: "/sluzby",
  },
  {
    label: "O nás",
    href: "/o-nas",
  },
  {
    label: "Reference",
    href: "/reference",
  },
];
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <header className="transparent md:sticky top-0 z-30 ">
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="p-3 bg-white rounded-full shadow-2xl">
            <Link href="/">
              <Image
                height="38"
                width="38"
                src="/swajp.svg"
                className="rounded-full"
                alt="DRIE Logo"
              />
            </Link>
          </div>
          <div className="flex bg-white p-3 shadow-2xl rounded-full">
            <button
              onClick={() => setNavbar(!navbar)}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center text-sm focus:outline-none  text-gray-400 hover:bg-white/10 "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
