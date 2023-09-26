"use client"
import React from "react";

const headline = () => {
  const [value,setValue] = React.useState("1")
  return (
    <div className="flex justify-between px-4 pt-3">
      <div className="flex items-center">
        <div>
          <div className="text-[#19124f] text-xl font-semibold">T-Shirts</div>
        </div>
        <div className="text-[#757195] ml-2">122,584 Results</div>
      </div>
      <div className="font-semibold pr-[6px] pt-1">
        <select value={value} onChange={e=> setValue(e.target.value)}>
          <option value="1">Most Relevant&nbsp;&nbsp;</option>
          <option value="2">Trending </option>
          <option value="3">Newest </option>
          <option value="4">Best Selling </option>
        </select>
      </div>
    </div>
  );
};

export default headline;
