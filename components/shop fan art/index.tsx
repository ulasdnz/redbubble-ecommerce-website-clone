"use client"
import React, {useState} from "react";
import Headline from "./headline";
import ToogleHead from "./toggleHead";
import Cards from "./cards"

const index = () => {
    const [toggle, setToggle] = useState<boolean>(true)

  return (
    <div className="flex justify-center pt-8 px-4 mt-8 pb-12">
      <div className="w-full max-w-[1170px]">
        <Headline />
        <ToogleHead toggle={toggle} handleToggle={(bl:boolean)=> setToggle(bl)}/>
        <Cards toggle={toggle} />
      </div>
    </div>
  );
};

export default index;
