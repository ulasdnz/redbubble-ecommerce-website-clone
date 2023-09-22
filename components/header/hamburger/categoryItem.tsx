import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  index: number;
  setSelectedCategory: Function;
};

const categoryItem: React.FC<Props> = ({
  image,
  title,
  setSelectedCategory,
  index,
}) => {
  return (
    <div
      onClick={() => setSelectedCategory({ isSelected: true, index: index })}
      className="relative flex items-center  py-[17px] pr-10 border-b-[1px] border-solid border-[rgb(214,218,223)]"
    >
      <div className="ml-4">
        <Image
          width={48}
          height={48}
          alt="Clothing picture"
          src={image}
          className="rounded"
        />
      </div>
      <div className="pl-4">{title}</div>
      <div className="absolute w-6 h-6 z-20 right-4 top-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default categoryItem;
