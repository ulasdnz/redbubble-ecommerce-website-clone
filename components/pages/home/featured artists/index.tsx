import React from "react";
import Headline from "./headline";
import Cards from "./cards";

const index = () => {
  return (
    <div className="flex justify-center pt-8 px-4 mt-8 overflow-hidden max-sm:px-1">
      <div className="w-full max-w-[1170px] pl-2 ">
        <Headline />
        <Cards />
      </div>
    </div>
  );
};

export default index;
