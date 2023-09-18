"use client";
import React from "react";

type Props = {
  handleToggle: Function;
  toggle: boolean;
};

const toggleHead: React.FC<Props> = ({ handleToggle, toggle }) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="flex mt-1 mr-8 ">
        <a
          href=""
          className="p-2 mr-2 relative cursor-pointer focus:bg-[#F2F2F6] focus:rounded-md	"
          onClick={(e) => {
            e.preventDefault();
            handleToggle(true);
          }}
        >
          The Last Unicorn
          {toggle ? (
            <div className="absolute w-full h-1 -bottom-1 left-0 bg-red-500"></div>
          ) : null}
        </a>
        <a
          href=""
          className="p-2 relative cursor-pointer focus:bg-[#F2F2F6] focus:rounded-md	"
          onClick={(e) => {
            e.preventDefault();
            handleToggle(false);
          }}
        >
          Borderlands
          {!toggle ? (
            <div className="absolute w-full h-1 -bottom-1 left-0 bg-red-500 "></div>
          ) : null}
        </a>
      </div>
      <div className="text-[rgb(255,89,111)] font-semibold leading-[26px] cursor-pointer">
      {toggle?"Shop The Last Unicorn merch": "Shop Borderlands merch"}
      </div>
    </div>
  );
};

export default toggleHead;
