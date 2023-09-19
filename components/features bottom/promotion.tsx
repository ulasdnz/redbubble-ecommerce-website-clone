import React from "react";
import EmailCard from "./emailCard";
const promotion = () => {
  return (
    <div>
      <div className=" max-w-[1148px] flex flex-col justify-center items-center w-full p-12 mr-auto ml-auto">
        <EmailCard />
      </div>
      <div className="h-[5px] w-full bg-[#F2F2F6]"></div>
      <div className="max-w-[1180px] px-6 py-8 flex justify-end mr-auto ml-auto">
        <div className="mr-3 text-[18px]	font-extrabold">TR</div>
        <div className="mr-6 font-semibold">USD$ - English</div>
        <div className="font-semibold">Mature content: Hidden</div>
      </div>
    </div>
  );
};

export default promotion;
