import React from "react";

const discount = () => {
  return (
    <div
      className="w-full h-[60px] bg-gradient-to-r from-[#755EED] to-[#5137DA] text-white leading-7	
   flex items-center justify-center max-sm:h-[54px] max-sm:leading-5 relative -z-10"
    >
      <span className="text-xl max-sm:text-sm max-sm:pl-3">
        Up to 40% off&nbsp;
        <a
          className="underline font-bold"
          href="https://www.redbubble.com/explore/"
        >
          sitewide
        </a>
        &nbsp;with code&nbsp;
        <strong className="font-bold	bg-[#0000004d] px-2 py-[1px] pb-[3px] rounded">
          YOUDESERVEIT
        </strong>
      </span>
    </div>
  );
};

export default discount;
