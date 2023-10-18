import React from "react";
import Image from "next/image";

const badges = [
  {
    name: "Next.js",
    src: "/badges/nextjs.svg",
  },
  {
    name: "Tailwind",
    src: "/badges/tailwind.svg",
  },
  {
    name: "Figma",
    src: "/badges/figma.svg",
  },
  {
    name: "Node.js",
    src: "/badges/nodejs.png",
  },
  {
    name: "Clerk",
    src: "/badges/clerk.png",
  },
];
export default function Badge() {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-lg flex-wrap mt-6 md:mt-0 gap-4 items-center content-center justify-center">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className="p-2 px-4 bg-white w-fit items-center rounded-full flex gap-2 shadow-md"
          >
            <div className="relative w-4 h-4 md:w-6 md:h-6 ">
              <Image
                src={badge.src}
                fill
                alt={badge.name}
                className="border-gray-700 rounded-full"
              />
            </div>
            <p className="text-sm md:text-base text-gray-500">{badge.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
