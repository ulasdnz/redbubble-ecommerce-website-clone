"use client";
import React, { useState, useEffect } from "react";
import Products from "@/components/pages/shop/products";
import Filter from "@/components/pages/shop/filters";
import Data from "../../data/data.json";

const categories = Data.tshirts.categories;
const productUnfiltered = Data.tshirts.products;

type ProductType = {
  src: string;
  title: string;
  artistName: string;
  price: number;
  gender: string;
  style: string;
  color: string;
  size: string[];
  neckline: string;
  sleeveLength: string;
  priceCategory: string;
};

type Color = {
  name: string;
  code: string;
  src: string;
};

const page = () => {
  const [gender, setGender] = useState(categories.gender.items[0]);
  const [style, setStyle] = useState(categories.style.items[0]);
  const [neckline, setNeckline] = useState<string[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [productData, setProductData] = useState<ProductType[]>([]);

  useEffect(() => {
    let filteredProducts: ProductType[] = [...productUnfiltered];

    if (gender !== "Everyone") {
      const temp = filteredProducts.filter(
        (product: ProductType) =>
          product.gender === "Everyone" || product.gender === gender
      );
      filteredProducts = [...temp];
    }

    if (style !== "All Styles") {
      const temp = filteredProducts.filter(
        (product: ProductType) => product.style === style
      );
      filteredProducts = [...temp];
    }
     if(neckline.length > 0) {
      const temp = filteredProducts.filter((product: ProductType) => {
        let includes: boolean = false;
        neckline.map((neck) => {
          if (neck === product.neckline) includes = true;
        });
        return includes;
      });
      filteredProducts = [...temp];
    }

    if (colors.length > 0) {
      const temp = filteredProducts.filter((product: ProductType) => {
        let includes: boolean = false;
        colors.map((color) => {
          if (color.name === product.color) includes = true;
        });
        return includes;
      });
      filteredProducts = [...temp];
    }

    setProductData([...filteredProducts])
  }, [colors, neckline,style, gender]);

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <Filter
          gender={gender}
          setGender={(e) => setGender(e)}
          genderData={categories.gender}
          styleData={categories.style}
          colorData={categories.color}
          neckline={neckline}
          setNeckline={setNeckline}
          necklineData={categories.neckline}
          style={style}
          setStyle={setStyle}
          colors={colors}
          setColors={setColors}
        />
        <Products products={productData} />
      </div>
    </div>
  );
};

export default page;
