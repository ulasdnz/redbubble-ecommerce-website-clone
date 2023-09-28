import React from "react";
import EmailCard from "./emailCard";
const promotion = () => {
  return (
    <div>
      <div className=" max-w-[1148px] flex flex-col justify-center items-center w-full p-12 mr-auto ml-auto">
        <EmailCard />
      </div>
      <div className="h-[5px] w-full bg-[#F2F2F6]"></div>
      <div
        className="max-w-[1180px] px-6 py-8 flex justify-end mr-auto ml-auto
      max-sm:flex-col max-sm:px-0 max-sm:py-0
      "
      >
        <div className="flex relative max-sm:border-y-2 max-sm:border-solid max-sm:p-3">
          <div className="mr-3 text-[18px]	font-extrabold">TR</div>
          <div className="mr-6 font-semibold max-sm:font-normal">
            USD$ - English
          </div>
          <div className="sm:hidden h-6 w-6 absolute right-3 top-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z" fill="currentColor"></path></svg>
          </div>
        </div>
        <div className="relative font-semibold max-sm:font-normal max-sm:p-3">
          Mature content: Hidden
          <div className="sm:hidden h-6 w-6 absolute right-3 top-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default promotion;
