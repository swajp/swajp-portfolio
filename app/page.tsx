import Badges from "@/components/badge";
import Card from "@/components/card";
import Connect from "@/components/connect";
import Title from "@/components/title";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Title />
      <Badges />
      <Connect />
      <Card />
    </div>
  );
}
