import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 items-center content-center justify-center">
      <div className="max-w-3xl p-4 md:p-0">
        <div className="mt-4 md:mt-6 gap-2 flex">
          <div className="flex flex-col gap-3">
            <h1 className=" text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-900">
              Something about me.
            </h1>
            <div className="flex flex-col gap-4">
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                My name is Miroslav Stejskal, and I have been involved in web
                development for some time. Initially, it was just a hobby, but
                now I dedicate myself to this activity daily and with great
                enthusiasm
              </p>

              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                My main motivation for web application development is the desire
                to create modern and visually appealing websites. I am a
                passionate advocate of the Next.js framework, which allows me to
                implement the latest approaches in web development.
              </p>
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                One of my favorite projects that I've worked on is a project
                called DRIE. I collaborate on it with friends, and we aim not
                only to offer web development but also to create modern tools
                and solutions for the online environment.
              </p>
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                My dream is to live in an environment where every website is
                modern and attractive. Even though I haven't been employed in
                this field yet, it doesn't mean I lack the passion to learn new
                things efficiently and quickly.
              </p>
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                Beyond web development, I have a passion for badminton and enjoy
                rewatching episodes of The Walking Dead."
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl mt-8">
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
