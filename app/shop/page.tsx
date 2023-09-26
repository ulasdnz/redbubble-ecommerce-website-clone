import React from "react";
import Products from "@/components/pages/shop/products";
import Filter from "@/components/pages/shop/filters";

const page = () => {
  return (
    <div className="p-8">
      <div className="flex justify-center">
        <Filter />
        <Products />
      </div>
    </div>
  );
};

export default page;
