"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    name: "DRIE",
    description:
      "If you are looking for a modern website, you are at the right place. We will create a website that will be tailored to your needs.",
    src: "/drie-project.png",
    href: "https://drie.cz",
  },
  {
    name: "DRIE - Blog",
    description:
      "We have created a blog where we share our knowledge. We write about web development, programming, and other interesting topics.",
    src: "/blog-project.png",
    href: "https://blog.drie.cz",
  },
  {
    name: "LoRa",
    description:
      "Are you interested in LoRaWAN technology? We started to offer this technology in the Czech Republic in Boskovice.",
    src: "/lora-project.png",
    href: "https://lora.drie.cz/",
  },
  {
    name: "YOGA BOSKOVICE",
    description:
      "Website for yoga studio in Boskovice. Modern and clean design. Build with Wordpress.",
    src: "/yoga-project.png",
    href: "https://yogaboskovice.cz",
  },
  {
    name: "WatchLater",
    description:
      "I am currently working on this project. Where you can save your favorite movies and series. AND! Share it with your friends.",
    src: "/watchlater-project.png",
    href: "https://share-movie.vercel.app",
  },
];

export default function Card() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-0">
      {cards.map((card) => (
        <motion.div
          key={card.name}
          whileHover={{ scale: 1.02 }}
          className=" overflow-hidden flex items-center content-center justify-center rounded-3xl"
        >
          <Link target="blank" href={card.href}>
            <div className=" max-w-4xl h-fit w-full bg-white rounded-xl">
              <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-4 overflow-hidden">
                <div className="p-12 pl-16 md:pl-12 flex-col">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {card.name}
                  </h1>
                  <p className="pt-2 w-64 text-gray-600 text-base md:text-lg tracking-tighter">
                    {card.description}
                  </p>
                  <div className="pt-6">
                    <motion.div
                      whileHover={{ scaleX: 1.05 }}
                      className="flex gap-2 items-center p-3 px-6 w-fit bg-gray-100 rounded-2xl"
                    >
                      <button className="">Read more</button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <Image
                  src={card.src}
                  alt={card.name}
                  width={430}
                  className="rounded-3xl"
                  height={300}
                />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
