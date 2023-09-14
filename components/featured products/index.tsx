import React from "react";
import GroupHeadline from "../groupHeadline";

const index = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-8 px-4 w-full max-w-[1180px]">
        <div>
          <GroupHeadline title="Featured products" />
        </div>
      </div>
    </div>
  );
};

export default index;
