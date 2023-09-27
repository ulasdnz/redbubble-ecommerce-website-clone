"use client"
import React, {useState } from "react";
import Headline from "./headline";
import CircleFilterItem from "./circleFilterItem";
import RectangleFilterItem from "./rectangleFilterItem";
import ColorFilterItem from "./colorFilterItem";
import Data from "@/data/data.json";

type Item = {
  name: string;
  code: string;
  src: string;
};

const filter = () => {
  const [colors, setColors] = useState<Item[]>([]);
    
  
  const gender = Data.tshirts.categories.gender;
  const style = Data.tshirts.categories.style;
  const neckline = Data.tshirts.categories.neckline;
  const color = Data.tshirts.categories.color;

  return (
    <div className="w-[240px] mr-8 h-full shrink-0">
      <Headline filterNumber={1} />
      <CircleFilterItem name={gender.name} items={gender.items} />
      <CircleFilterItem name={style.name} items={style.items} />
      <RectangleFilterItem name={neckline.name} items={neckline.items} />
      <ColorFilterItem value={colors} setValue={(e:Item[])=>setColors(e)} name={color.name} items={color.items} />
    </div>
  );
};

export default filter;
