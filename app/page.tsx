import Badges from "@/components/badge";
import Card from "@/components/card";
import Connect from "@/components/connect";
import Mail from "@/components/mail";
import Title from "@/components/title";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Title />
      <Badges />
      <div className="flex flex-col gap-4">
        <Connect />

        <Mail />
      </div>
      <Card />
    </div>
  );
}
