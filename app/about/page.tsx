import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="mt-16 md:mt-20 gap-2 flex">
        <div className="">
          <h1 className=" text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-900">
            Something about me.
          </h1>
          <p className=" text-sm md:text-base text-gray-500 tracking-wide">
            I am FullStack Developer. I develop.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center content-center">
        <div className=" max-w-3xl rounded-3xl">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-3xl"
            src="/nature.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
