import React from "react";

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

const orderSummary: React.FC<Props> = ({ products }) => {
  const calculateSubtotal = () => {
    let price = 0;
    products.map((product) => {
      price += product.count * product.price;
    });
    return price;
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="font-semibold">Order Summary</div>
      <div className="flex justify-between">
        <div>Subtotal</div>
        <div className="flex">
          <del className="text-[#757195] mr-2">
            ${calculateSubtotal().toFixed(2)}
          </del>
          <div className="text-[#757195]">
            ${(calculateSubtotal() * 0.8).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>Standard shipping</div>
        <div className="flex">
          <div className="text-[#757195]">$29.29</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl	">Total</div>
        <div className="font-semibold text-xl text-[rgb(25,18,79)]">
          ${(calculateSubtotal() * 0.8 + 29.99).toFixed(2)}
        </div>
      </div>
      <div
        className="w-full h-12 bg-[#FF596F] font-semibold text-xl rounded-full text-white 
      flex justify-center items-center cursor-pointer"
      >
        Checkout
      </div>
      <div className="text-center">
        By proceeding to checkout, I agree to Redbubble’s
        <span className="text-[rgb(255,89,111)]">&nbsp;User Agreement</span>
      </div>
    </div>
  );
};

export default orderSummary;
