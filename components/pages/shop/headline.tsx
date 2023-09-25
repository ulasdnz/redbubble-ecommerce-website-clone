import React from "react";

const headline = () => {
  return (
    <div className="flex justify-between px-4 pt-3">
      <div className="flex items-center">
        <div>
          <div className="text-[#19124f] text-xl font-semibold">T-Shirts</div>
        </div>
        <div className="text-[#757195] ml-2">122,584 Results</div>
      </div>
      <div className="font-semibold">
        <select>
          <option selected>Most Relevant</option>
          <option>Trending</option>
          <option>Newest</option>
          <option>Best Selling</option>
        </select>
      </div>
    </div>
  );
};

export default headline;
