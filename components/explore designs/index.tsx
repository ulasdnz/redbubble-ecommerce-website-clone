import React from "react";
import Headline from "./headline";
import Cards from "./cards";

const index = () => {
  return (
    <div className="flex justify-center pt-8 px-4 mt-8 overflow-hidden">
      <div className="w-full max-w-[1180px]">
        <Headline />
        <Cards />
        <div className="min-[767px]:hidden w-full flex justify-center">
          <span className="bg-[rgba(233,233,240,0.6)] h-10 px-4 flex justify-center items-center rounded-full font-semibold">
            See more
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
