"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Mail() {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="flex justify-center  ">
      <Link target="blank" href="mailto:miroslav.stejskal@drie.cz">
        <div className=" max-w-md w-fit rounded-full p-2 px-4 text-gray-500 hover:text-white stroke-gray-500 hover:stroke-white bg-white hover:bg-[#00b551] transition-all">
          <div className="flex gap-1 text-center justify-center">
            <p className="">miroslav.stejskal@drie.cz</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
