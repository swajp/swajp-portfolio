import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 items-center content-center justify-center">
      <div className="max-w-3xl p-4 md:p-0">
        <div className="mt-10 md:mt-12 gap-2 flex">
          <div className="flex flex-col gap-3">
            <h1 className=" text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-900">
              Something about me.
            </h1>
            <div className="flex flex-col gap-4">
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                dui sit amet justo lobortis gravida. Phasellus sollicitudin enim
                et est maximus, sed consectetur nunc condimentum. Proin eget
                venenatis augue, ullamcorper lobortis sapien. Nullam eu
                fringilla sapien, nec tincidunt sem. Nunc ut dictum odio.
                Curabitur id dignissim orci, non semper tellus. Phasellus quis
                ullamcorper turpis.
              </p>

              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                Sit amet justo lobortis gravida. Phasellus sollicitudin enim et
                est maximus, sed consectetur nunc condimentum. Proin eget
                turpis.
              </p>
              <p className=" text-base md:text-lg text-gray-500 tracking-wide">
                Maximus, sed consectetur nunc condimentum. Proin eget venenatis
                augue, ullamcorper lobortis sapien. Nullam eu fringilla sapien,
                nec tincidunt sem. Nunc ut dictum odio. Curabitur id dignissim
                orci, non semper tellus. Phasellus quis ullamcorper turpis.
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
