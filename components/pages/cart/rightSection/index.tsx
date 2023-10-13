"use client";
import React, { useState } from "react";
import RightHeadline from "./headline";
import ShippingChoice from "./shippingChoice";
import Coupon from "./coupon";
import OrderSummary from "./orderSummary";

type Product = {
  src: string;
  title: string;
  artist: string;
  price: number;
  count: number;
};
type Props = {
  products: Product[];
};

const index: React.FC<Props> = ({ products }) => {
  const [selectedShippingChoice, setSelectedShippingChoice] =
    useState("Standard");
  return (
    <div
      className="w-[400px] p-8 rounded ml-12 mt-14
      shadow-[0_1px_1px_-1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.1)] "
    >
      <RightHeadline />
      <ShippingChoice
        isSelected={selectedShippingChoice === "Standard"}
        title="Standard Shipping"
        arrivalDate="Between 19 - 24 October"
        extraCost={null}
        handleClick={() => setSelectedShippingChoice("Standard")}
      />
      <ShippingChoice
        isSelected={selectedShippingChoice === "Express"}
        title="Express Shipping"
        arrivalDate="Between 19 - 20 October"
        extraCost={57.09}
        handleClick={() => setSelectedShippingChoice("Express")}
      />
      <Coupon />
      <OrderSummary products={products} />
    </div>
  );
};

export default index;
