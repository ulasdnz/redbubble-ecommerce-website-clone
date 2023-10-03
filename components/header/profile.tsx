"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  setAuth: (e: boolean) => void;
};
const profile = () => {

  return (
    <div className="relative w-8 h-8 rounded-full mr-3 ml-6 ">
      <Image
        className="cursor-pointer "
        width={32}
        height={32}
        alt="profile picture"
        src="https://d1ielco78gv5pf.cloudfront.net/assets/rb-default-avatar.140x140-74f9462fbe8b15d59e89ceee5733a3ca6eada009a9db21b08fa72598fa820909.png"
      />
      <div
        className="w-[320px] absolute z-10 top-12 -right-[144px] bg-white rounded shadow-[0_8px_10px_-5px_rgba(0,0,0,0.2),0_16px_24px_2px_rgba(0,0,0,0.14),0_6px_30px_5px_rgba(0,0,0,0.1)]
      
      "
      >
        <div className="w-full h-full bg-[#F2F2F6]">
          <div className="flex flex-col items-center p-4 cursor-pointer ">
            <Image
              width={48}
              height={48}
              alt="profile picture"
              src="https://d1ielco78gv5pf.cloudfront.net/assets/rb-default-avatar.140x140-74f9462fbe8b15d59e89ceee5733a3ca6eada009a9db21b08fa72598fa820909.png"
            />
            <div className="font-semibold leading-7 py-1">ulasdeniz</div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-full py-2">
            <div className="px-8 py-[9px] cursor-pointer hover:bg-[#F2F2F6]">
              Order History
            </div>
            <div className="px-8 py-[9px] cursor-pointer hover:bg-[#F2F2F6]">
              BubbleMail
            </div>
            <div className="px-8 py-[9px] cursor-pointer hover:bg-[#F2F2F6]">
              Account Settings
            </div>
            <div className="px-8 py-[9px] cursor-pointer hover:bg-[#F2F2F6]">
              Manage Portfolio
            </div>
          </div>
        </div>
        <div className="w-full h-full pb-2 px-8">
          <div className="w-full h-full pb-[7px] pt-2 bg-[#FF596F] font-semibold text-white text-center rounded-full">
            Sell Your Art
          </div>
        </div>
        <div className="w-full h-full py-1 border-b-2 border-solid border-[#F2F2F6]"></div>
        <div className="py-2 text-sm">
          <div className="px-8 py-[6px] cursor-pointer hover:bg-[#F2F2F6]">
            RB Blog
          </div>
          <div
            className="px-8 py-[6px] cursor-pointer hover:bg-[#F2F2F6] text-[#FF596F]"
            onClick={() => {
              window.localStorage.removeItem("auth");
              window.location.href ="/"
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
