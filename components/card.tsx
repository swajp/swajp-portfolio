import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex items-center content-center justify-center">
      <div className=" max-w-3xl h-[300px] w-full bg-white rounded-3xl">
        <div className="flex justify-between">
          <h1>MY CARD</h1>
          <div className="">
            <Image
              src="/drie-project.png"
              alt="Drie.cz"
              width={600}
              className="absolute "
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
