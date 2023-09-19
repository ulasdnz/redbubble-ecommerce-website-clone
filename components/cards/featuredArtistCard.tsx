import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  avatar: StaticImageData;
  title: string;
};

const featuredArtistCard: React.FC<Props> = ({ image, avatar, title }) => {
  return (
    <div
      className="cursor-pointer min-w-[calc(((100%_+_16px)_/_4)_-_16px)] w-[calc(((100%_+_16px)_/_4)_-_16px)]  mr-4 
    rounded shadow-[0_1px_1px_-1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.1)]
    max-sm:w-[78%] max-sm:min-w-[78%]
    "
    >
      <div className="relative">
        <Image
          width={0}
          height={220}
          alt="Featured Artist item image"
          className="w-full h-[220px] object-cover rounded"
          src={image}
        />
        <div className="absolute rounded-full -bottom-7 left-[calc(50%-32px)] border-2 border-solid border-white">
          <Image
            src={avatar}
            width={60}
            height={60}
            alt="Featured Artist item top image"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="mt-12 w-full flex flex-col items-center pb-6">
        <div>
          <span className="font-semibold">{title}</span>
        </div>
        <div className="mt-4 bg-[rgba(233,233,240,0.6)] p-4 py-2 cursor-pointer hover:bg-[#E7E7EC] font-semibold rounded-full">
          View Shop
        </div>
      </div>
    </div>
  );
};

export default featuredArtistCard;
