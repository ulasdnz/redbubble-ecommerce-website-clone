import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string,
  image: StaticImageData,
  backgroundColor: string
}

const PopupCard: React.FC<Props> = ({ title, image, backgroundColor }) => {
  return (
    <div className="w-[90px] h-[120px] flex flex-col justify-between rounded
    max-sm:relative max-sm:h-[170px] max-sm:w-[311px] max-sm:mr-4" style={{backgroundColor}}>
      <div className="text-white px-4 pt-4 font-semibold text-sm max-sm:absolute max-sm:top-2 " >{title}</div>
      <Image
        width={90}
        height={42}
        src={image}
        alt="Picture of the card"
        className="rounded-md h-[42px] max-sm:h-[170px] max-sm:w-[311px] object-cover "
      /> 
    </div>
  );
};

export default PopupCard;
