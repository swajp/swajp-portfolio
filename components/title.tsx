import React from "react";

export default function Title() {
  return (
    <div className="h-[20vh]">
      <div className="flex flex-col text-center items-center  mt-20 md:mt-24 gap-4 px-6 md:px-0">
        <h1 className=" text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-900">
          Hi, I'm Miroslav.
        </h1>
        <p className="text-base text-gray-500 tracking-wide max-w-lg">
          I love to create catchy and modern websites. I am a self-taught web
          developer and I am always looking for new challenges.
        </p>
      </div>
    </div>
  );
}
