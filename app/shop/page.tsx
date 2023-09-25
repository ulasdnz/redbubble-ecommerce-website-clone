import React from "react";
import Products from "@/components/pages/shop/index";
import Filter from "@/components/pages/shop/filter";

const page = () => {
  return (
    <div className="p-8">
      <div className="flex justify-center">
        <Filter/>
        <Products />
      </div>
    </div>
  );
};

export default page;
