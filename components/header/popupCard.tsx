import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string,
  image: StaticImageData,
  backgroundColor: string
}

const PopupCard: React.FC<Props> = ({ title, image, backgroundColor }) => {
  return (
    <div className="w-[90px] h-[170px] flex flex-col justify-between rounded
    max-sm:w-full max-sm:flex-row max-sm:h-[100px] max-sm:items-center
    " style={{backgroundColor}}>
      <div className="text-white px-4 pt-4 font-semibold text-sm max-sm:pt-0" >{title}</div>
      <Image
        width={90}
        height={110}
        src={image}
        alt="Picture of the card"
        className="rounded-md h-[110px] max-sm:h-[62px] object-cover"
      />
    </div>
  );
};

export default PopupCard;
