import React from "react";
import Image from "next/image";

interface Props {
  title: string,
  image: string,
  backgroundColor: string
}

const PopupCard: React.FC<Props> = ({ title, image, backgroundColor }) => {
  return (
    <div className="w-[90px] h-[120px] flex flex-col justify-between rounded" style={{backgroundColor}}>
      <div className="text-white px-4 pt-4 font-semibold text-sm" >{title}</div>
      <Image
        width={90}
        height={42}
        src={image}
        alt="Picture of the card"
        className="rounded-md h-[42px] object-cover"
      />
    </div>
  );
};

export default PopupCard;