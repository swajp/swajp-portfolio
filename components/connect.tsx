"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Connect() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="flex justify-center  ">
      <Link href="https://www.linkedin.com/in/miroslav-stejskal/">
        <div className=" max-w-md w-fit rounded-full p-2 px-4 text-gray-500 hover:text-white stroke-gray-500 hover:stroke-white bg-white hover:bg-[#0077B5] transition-all">
          <div className="flex gap-1 text-center justify-center">
            <p className="">Connect with me on LinkedIn</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-3 h-3 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
