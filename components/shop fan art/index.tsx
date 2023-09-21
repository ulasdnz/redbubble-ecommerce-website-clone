"use client";
import React, { useState } from "react";
import Headline from "./headline";
import ToogleHead from "./toggleHead";
import Cards from "./cards";

const index = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="flex justify-center pt-8 px-4 mt-8 pb-12 overflow-hidden">
      <div className="w-full max-w-[1190px]">
        <Headline />
        <ToogleHead
          toggle={toggle}
          handleToggle={(bl: boolean) => setToggle(bl)}
        />
        <Cards toggle={toggle} />
        <div
          className="text-[rgb(255,89,111)] font-semibold leading-[26px] cursor-pointer  pr-4 text-center
      min-[767px]:hidden
      "
        >
          {toggle ? "Shop The Last Unicorn merch" : "Shop Borderlands merch"}
        </div>
      </div>
    </div>
  );
};

export default index;
