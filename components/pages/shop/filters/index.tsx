import React from "react";
import Headline from "./headline";
import CircleFilterItem from "./circleFilterItem";
import RectangleFilterItem from "./rectangleFilterItem"
import Data from "@/data/data.json"

const filter = () => {
  const gender = Data.tshirts.categories.gender
  const style = Data.tshirts.categories.style
  const neckline = Data.tshirts.categories.neckline
  return (
    <div className="w-[240px] mr-8 h-full shrink-0">
      <Headline filterNumber={1} />
      <CircleFilterItem name={gender.name} items={gender.items} />
      <CircleFilterItem name={style.name} items={style.items} />
      <RectangleFilterItem name={neckline.name} items={neckline.items} />
    </div>
  );
};

export default filter;
