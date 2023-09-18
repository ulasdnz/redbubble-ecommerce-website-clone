import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  name: string;
  url: StaticImageData;
}

const ArtistCard: React.FC<Props> = ({ name, url }) => {
  return (
    <div className="mr-4 shrink-0 cursor-pointer">
      <div>
        <Image
          width={80}
          height={80}
          src={url}
          alt="Picture of the artist"
          className="rounded-full"
        />
      </div>
      <div className=" w-full text-center text-[12px] mt-2">{name}</div>
    </div>
  );
};

export default ArtistCard;
