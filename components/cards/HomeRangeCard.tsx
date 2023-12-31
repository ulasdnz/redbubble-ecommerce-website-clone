import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  buttonTitle: string;
  isBigger: boolean;
}

const HomeRangeCard: React.FC<Props> = ({ src, buttonTitle, isBigger }) => {
  const className = isBigger
    ? "relative w-full h-full col-[span_2] cursor-pointer rounded bg-red-500 max-w-full max-h-full overflow-hidden max-sm:col-[span_3_/_auto] max-sm:bg-white max-sm:col-[span_6_/_auto]"
    : "relative w-full h-full col-[span_2] cursor-pointer rounded bg-red-500 max-w-full max-h-full overflow-hidden max-sm:col-[span_3_/_auto] max-sm:bg-white ";
  return (
    <div className={className}>
      <Image
        width={361}
        height={400}
        className="object-cover cursor-pointer h-full w-full transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-105
        max-sm:h-[224px]
        "
        src={src}
        alt="homapage first image"
      />
      <div className="absolute cursor-pointer p-4 w-full left-0 bottom-4 flex justify-center max-sm:hidden">
        <div className="bg-white inline px-4 pb-[9px] pt-[7px] rounded-full font-semibold text-center shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0_5px_10px_0_rgba(0,0,0,0.1),0_1px_12px_0_rgba(0,0,0,0.1)]">
          {buttonTitle}
        </div>
      </div>
      <div className="hidden max-sm:block font-semibold text-sm py-4 leading-[26px] w-full text-center">
        {buttonTitle}
      </div>
    </div>
  );
};

export default HomeRangeCard;
