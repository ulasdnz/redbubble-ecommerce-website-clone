"use client";
import React, { useState, useEffect } from "react";
import ShopCard from "@/components/cards/shopCard";
import setProducts from "@/utils/setProducts";

type Product = {
  src: string;
  title: string;
  artist: string;
  price: number;
  count: number;
};

type Props = {
  selectedProducts: Product[],
}

const shopCards: React.FC<Props> = ({selectedProducts}) => {
 
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
          handleDeleteItem={() => setProducts(selectedProducts.toSpliced(i, 1))}
        />
      ))}
    </div>
  );
};

export default shopCards;
