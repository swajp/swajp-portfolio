import React from "react";

export default function Title() {
  return (
    <div className="h-[20vh]">
      <div className="flex flex-col text-center mt-20 md:mt-24 gap-2">
        <h1 className=" text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-900">
          Hi, I'm Miroslav.
        </h1>
        <p className=" text-sm md:text-base text-gray-500 tracking-wide">
          I am FullStack Developer. I develop.
        </p>
      </div>
    </div>
  );
}
