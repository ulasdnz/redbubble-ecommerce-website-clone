import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  title: string;
  description: string;
  rowNumber: number;
};

const svgCard: React.FC<Props> = ({ title, description, src, rowNumber }) => {
  return (
    <div
      className="flex justify-center p-1 box-content col-[span_6_/_auto] cursor-pointer sm:hidden"
      style={{ gridRowStart: rowNumber }}
    >
      <div className="mr-4 w-[50px]">
        <Image
          width={32}
          height={40}
          alt="svg icon"
          className="w-8 h-10"
          src={src}
        />
      </div>
      <div className="w-auto">
        <div className="leading-[26px] font-semibold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default svgCard;
