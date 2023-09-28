import React from "react";
import GroupHeadline from "../../../groupHeadline";

const headline = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <GroupHeadline title="Explore designs picked for you" />
      <div
        className="text-[#FF596F] font-semibold cursor-pointer hover:underline
    max-[767px]:hidden
    "
      >
        See more
      </div>
    </div>
  );
};

export default headline;
