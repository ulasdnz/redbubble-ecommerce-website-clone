import React from "react";
import Discount from "@/components/pages/cart/discount";
import Headline from "@/components/pages/cart/headline";
import ShopCards from "@/components/pages/cart/shopCards";

const page = () => {
  return (
    <div className="pt-10 pb-20 max-w-[1200px] ml-auto mr-auto">
      <div className="max-w-[725px] pl-6">
        <Headline />
        <Discount /> 
        <ShopCards/>
      </div>
      <div></div>
    </div>
  );
}; 

export default page;
