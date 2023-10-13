"use client"
import React, {useState, useEffect} from "react";
import Discount from "@/components/pages/cart/leftSection/discount";
import Headline from "@/components/pages/cart/leftSection/headline";
import ShopCards from "@/components/pages/cart/leftSection/shopCards";
import RightSection from "@/components/pages/cart/rightSection";
import getProducts from "@/utils/getProducts";

type Product = {
  src: string;
  title: string;
  artist: string;
  price: number;
  count: number;
};


const page = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const listener = () => {
      const products = getProducts();
      setSelectedProducts(products);
    };
    window.addEventListener("storage", listener); //!! normalde sadece başka tab'de local storage update olursa fire eder.
    listener();

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);

  return (
    <div className="flex pt-10 pb-20 max-w-[1200px] ml-auto mr-auto">
      <div className="w-full max-w-[725px] pl-6 ">
        <Headline />
        <Discount />
        <ShopCards selectedProducts={selectedProducts} />
      </div>
      <RightSection products={selectedProducts} />
    </div>
  );
};

export default page;
