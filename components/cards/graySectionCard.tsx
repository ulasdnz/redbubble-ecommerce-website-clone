import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  svg: StaticImageData;
  title: string;
  description: string;
};

const graySectionCard: React.FC<Props> = ({ svg, title, description }) => {
  return (
    <div
      className="bg-white text-center w-[20%] box-content p-8 
    max-sm:flex max-sm:w-full  max-sm:max-w-full  max-sm:items-between  max-sm:border-b-[1px] max-sm:border-solid
    max-sm:border-[rgb(214,218,223)] max-sm:p-4  max-sm:py-5
    "
    >
      <div className="flex justify-center shrink-0">
        <Image
          src={svg}
          width={96}
          height={96}
          alt={title + " svg icon"}
          className="max-sm:w-[64px] max-sm:h-auto "
        />
      </div>
      <div className="max-sm:ml-4 w-full  max-sm:w-[calc(100%-120px)] max-sm:grow-1">
        <div className="font-semibold mt-1 leading-6 max-sm:text-start max-sm:relative max-sm:text-sm">
          {title}
          <div className="hidden max-sm:inline-block max-sm:w-6 max-sm:h-6  absolute  -right-3  -top-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div className="text-[rgb(117,113,149)] text-sm mt-1 leading-6 max-sm:text-start max-sm:mt-0 max-sm:text-sm">
          {description}
        </div>
        <div className="font-semibold text-sm mt-1 leading-6 max-sm:hidden">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default graySectionCard;
