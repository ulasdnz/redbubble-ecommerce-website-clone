"use client";
import React, { useState, useEffect } from "react";
import ShopCard from "@/components/cards/shopCard";
import getProducts from "@/utils/getProducts";

type Product = {
  src: string;
  title: string;
  artist: string;
  price: number;
  count: number;
};

const shopCards = () => {
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

  const handleItemNumberChange = (
    index: number,
    oldCount: number,
    newCount: number
  ) => {
    const numberOfItems = window.localStorage.getItem("totalItemNumber");
    const numberDiff = newCount - oldCount;

    if (numberOfItems != null) {
      selectedProducts[index].count = newCount;
      const newNumberOfItems = numberOfItems + numberDiff;
      window.localStorage.setItem(
        "totalItemNumber",
        newNumberOfItems.toString()
      );
      window.localStorage.setItem("count" + (index + 1), newCount.toString());

      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="mt-8">
      {selectedProducts.map((product: any, i: number) => (
        <ShopCard
          key={i}
          src={product.src}
          title={product.title}
          artistName={product.artist}
          price={product.price}
          itemNumber={product.count}
          handleItemNumberChange={(newCount: number) =>
            handleItemNumberChange(i, product.count, newCount)
          }
          handleDeleteItem={() => {}}
        />
      ))}
    </div>
  );
};

export default shopCards;
