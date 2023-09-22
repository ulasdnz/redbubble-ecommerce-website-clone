import React from "react";

const detailItem: React.FC<{ categoryName: string }> = ({ categoryName }) => {
  return (
    <div className="py-4 border-t-[1px] border-solid border-[#D6DADF] bg-white">
      <span className="pl-4">{categoryName}</span>
    </div>
  );
};

export default detailItem;
