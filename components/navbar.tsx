"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    label: "Domů",
    href: "/",
  },
  {
    label: "Služby",
    href: "/sluzby",
  },
];

const variants = {
  open: { scale: 1, opacity: 1 },
  closed: { scale: 0, opacity: 0 },
};

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <header className="transparent md:sticky top-0 z-30 ">
      <nav className="">
        <div className="flex flex-wrap items-center justify-between p-4 pt-6">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              className="p-3 bg-white rounded-full shadow-2xl"
            >
              <Image
                height="38"
                width="38"
                src="/swajp.svg"
                className="rounded-full"
                alt="DRIE Logo"
              />
            </motion.div>
          </Link>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              onClick={() => setNavbar(!navbar)}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="flex bg-white p-3 shadow-2xl rounded-full items-center justify-center text-sm focus:outline-none  text-gray-400 hover:bg-gray-50 "
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
                  className="w-8 h-8"
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
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </motion.button>
            <motion.div
              animate={navbar ? "open" : "closed"}
              variants={variants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div
                className={`absolute p-4 bg-white shadow-xl rounded-2xl right-0 mt-3 `}
              >
                {routes.map((route) => (
                  <Link href={route.href}>
                    <div className=" px-20 py-4 rounded-2xl bg-white hover:bg-gray-50">
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
}
