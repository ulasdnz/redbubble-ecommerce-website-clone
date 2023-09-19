import React from "react";
import TagSvg from "../../public/home/gray section/tags.svg";
import Image from "next/image";
import Arrow from "../../public/home/gray section/arrow.svg";

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
        <div className="font-semibold ml-4 w-[238px]">
          10% off, promos, and the best indie art ever! Your Email
        </div>
      </div>
      <div className="w-full mt-3 relative">
        <input
          type="text"
          className="text-sm text-[#19124F] w-full h-10 border-[#8C95A5] border-solid border-b-2
         pl-[10px] pr-10 placeholder:text-[#5A5A5A]"
          placeholder="Your email address"
        />

        <div className="absolute top-2 right-1">
          <Image
            src={Arrow}
            alt="arrow send email icon"
            width={28}
            height={38}
            className="py-[1px] px-[6px] "
          />
        </div>
      </div>

      <div className=" w-[319pxpx] my-[11px] pl-3">
        <p className="text-[11px] text-[#757195] w-[330px]"
        >
          By submitting, you agree to our  &nbsp;
          <a
            className="text-[#757195] font-bold w-[330px]"
            href="https://www.redbubble.com/privacy"
            target="_blank"
          >
            Privacy Policy &nbsp;
          </a>
           and to receive our promotional emails (opt out any time).
        </p>
      </div>
    </div>
  );
};

export default emailCard;
