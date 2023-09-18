import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    svg: StaticImageData
    title: string;
    description: string;
}

const graySectionCard: React.FC<Props> = ({svg, title, description}) => {
  return (
    <div className="bg-white text-center w-[20%] box-content p-8">
      <div className="flex justify-center">
        <Image
          src={svg}
          width={96}
          height={96}
          alt={title+" svg icon"}
        />
      </div>
      <div className="font-semibold mt-1 leading-6">{title}</div>
      <div className="text-[rgb(117,113,149)] text-sm mt-1 leading-6">{description}</div>
      <div className="font-semibold text-sm mt-1 leading-6">Learn more</div>
    </div>
  );
};

export default graySectionCard;
