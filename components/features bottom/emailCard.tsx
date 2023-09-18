import React from "react";
import TagSvg from "../../public/home/gray section/tags.svg";
import Image from "next/image";

const emailCard = () => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <Image
            src={TagSvg}
            width={65}
            height={0}
            className="w-[65px] h-auto"
            alt="Tags svg icon"
          />
        </div>
        <div className="font-semibold ml-4 w-[238px]">10% off, promos, and the best indie art ever! Your Email</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default emailCard;
