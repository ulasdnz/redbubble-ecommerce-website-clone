"use client";
import React, { useState } from "react";
import GraySectionCard from "../../../cards/graySectionCard";
import getCardInfo from "./getCardInfo";
import { StaticImageData } from "next/image";

type CardInfo = {
  svg: StaticImageData;
  title: string;
  description: string;
};

const cards = () => {
  const [data, setData] = useState(getCardInfo());

  return (
    <div
      className="relative bg-white max-w-[1148px] w-full ml-auto mr-auto flex justify-between items-center overflow-hidden
    shadow-[0_1px_1px_-1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.1)]
    max-sm:flex-col max-sm:items-start   max-sm:max-w-full 
    "
    >
      {data.map((item: CardInfo, i: number) => (
        <GraySectionCard
          key={i}
          svg={item.svg}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default cards;
