import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  title: string;
  artistName: string;
  price: string;
};

const featuredProducts: React.FC<Props> = ({
  src,
  title,
  artistName,
  price,
}) => {
  return (
    <div className="w-[217px] mr-1 mt-4 rounded cursor-pointer max-sm:w-[310px] ">
      <div>
        <Image
          width={216}
          height={216}
          alt="Featured Product item image "
          className="w-[216px] h-[216px] rounded max-sm:w-[310px] max-sm:h-[310px]"
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
          {price}
        </span>
      </div>
    </div>
  );
};

export default featuredProducts;
