import React from "react";

const headline = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="font-semibold text-2xl leading-8">Shopping Cart</div>
      <div className="text-[rgb(117,113,149)]">2 items</div>
      <div className="w-[1px] h-5 bg-[#D6DADF]"></div>
      <div className="text-[rgb(117,113,149)]">$44.18</div>
    </div>
  );
};

export default headline;
