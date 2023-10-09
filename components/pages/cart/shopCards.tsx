"use client";
import React, {useState, useEffect} from "react";
import ShopCard from "@/components/cards/shopCard";
import Data from "@/data/data.json";
import getProducts from "@/hooks/getProducts";


const shopCards = () => {
  const [selectedProducts, setSelectedProducts] = useState([])

  const products = Data.tshirts.products;
  const prod = products[22];
  const prod2 = products[23]


  useEffect(()=>{
    const numberOfItems = window.localStorage.getItem("totalItemNumber");

    if (numberOfItems != undefined || numberOfItems != null) {
      const currentProductNumber = parseInt(numberOfItems);
      const products = getProducts(currentProductNumber);
      setSelectedProducts(products)
    }
  
  },[])
  
  return (
    <div className="mt-8">
        {
            selectedProducts.map((product:any) => <ShopCard
                src={product.src}
                title={product.title}
                artistName={product.artistName}
                price={product.price}
                itemNumber={product.count}
                handleItemNumberChange={() => {}}
                handleDeleteItem={() => {}}
              />)
        }

    </div>
  );
};

export default shopCards;
