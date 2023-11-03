"use client";

import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="flex justify-center  ">
      <Link target="blank" href="https://www.buymeacoffee.com/drie">
        <div className=" max-w-md w-fit rounded-full p-2 px-4 group text-gray-500 hover:text-white stroke-gray-500 hover:stroke-white bg-white hover:bg-red-500 transition-all">
          <div className="flex gap-2 text-center items-center justify-center">
            <HeartIcon className="w-5 h-5 text-red-500 group-hover:text-white" />
            <p className="">Support me!</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
