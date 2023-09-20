import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import HeartIcon from "../heartIcon";

type Props = {
  src: StaticImageData;
  title: string;
  artistName: string;
  productNumber: string;
};

const exploreDesignCard: React.FC<Props> = ({
  src,
  title,
  artistName,
  productNumber,
}) => {
  return (
    <div className="relative w-[221px] mr-1 mt-4 rounded cursor-pointer shrink-0">
      <div>
        <Image
          width={220}
          height={220}
          alt="Featured Product item image"
          className="w-[220px] h-[220px] object-cover rounded"
          src={src}
        />
      </div>
      <div className="py-3 ">
        <span className="block leading-6 font-semibold text-sm overflow-hidden	whitespace-nowrap text-ellipsis	">
          {title}
        </span>
        <span className="block leading-6 overflow-hidden	whitespace-nowrap text-ellipsis	">
          {artistName}
        </span>
        <span className="block text-sm	font-semibold mt-3 leading-6 overflow-hidden	whitespace-nowrap text-ellipsis	">
          {productNumber}
        </span>
      </div>
      <HeartIcon/>
    </div>
  );
};

export default exploreDesignCard;
