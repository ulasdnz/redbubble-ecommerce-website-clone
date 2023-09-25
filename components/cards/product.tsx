import React from "react";
import Image from "next/image";
import HeartIcon from "../heartIcon";

type Props = {
  src: string;
  title: string;
  artistName: string;
  productNumber: number;
};

const exploreDesignCard: React.FC<Props> = ({
  src,
  title,
  artistName,
  productNumber,
}) => {
  return (
    <div className="relative w-[233px] mr-1 mt-4 rounded cursor-pointer shrink-0 ">
      <div className="w-[233px] h-[233px] overflow-hidden">
        <Image
          width={233}
          height={233}
          alt="Featured Product item image"
          className="w-[233px] h-[233px] object-cover rounded hover:scale-150 transition-transform duration-[0.25s] ease-[ease-in-out]"
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
        <span className="block font-semibold mt-3 leading-6 overflow-hidden	whitespace-nowrap text-ellipsis	">
          From ${productNumber}
        </span>
      </div>
      <HeartIcon />
    </div>
  );
};

export default exploreDesignCard;
