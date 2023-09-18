import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = { src: StaticImageData; title: string; description: string };

const svgCard: React.FC<Props> = ({ title, description, src }) => {
  return (
    <div className="flex p-4 box-content col-[span_2] row-start-2 cursor-pointer">
      <div className="mr-8 w-[50px]">
        <Image
          width={32}
          height={40}
          alt="svg icon"
          className="w-8 h-10"
          src={src}
        />
      </div>
      <div className="w-full">
        <div className="leading-[26px] font-semibold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default svgCard;
