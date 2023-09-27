"use client";
import React from "react";
import Headline from "./headline";
import CircleFilterItem from "./circleFilterItem";
import RectangleFilterItem from "./rectangleFilterItem";
import ColorFilterItem from "./colorFilterItem";

type Color = {
  name: string;
  code: string;
  src: string;
};

type Category = {
  name: string;
  modal: string;
  items: string[];
};
type Props = {
  gender: string;
  setGender: (value: string) => void;
  style: string;
  setStyle: (value: string) => void;
  neckline: string[];
  setNeckline: (value:string[]) => void;
  colors: Color[];
  setColors: (color: Color[]) => void;
  genderData: Category;
  styleData: Category;
  necklineData: Category;
  colorData: {
    name: string;
    modal: string;
    items: {
      name: string;
      code: string;
      src: string;
    }[];
  };
};

const filter: React.FC<Props> = ({
  gender,
  setGender,
  genderData,
  styleData,
  necklineData,
  colors,
  setColors,
  colorData,
  style,
  setStyle,
  neckline,
  setNeckline
}) => {
  return (
    <div className="w-[240px] mr-8 h-full shrink-0">
      <Headline filterNumber={1} />
      <CircleFilterItem
        value={gender}
        setValue={(e: string) => setGender(e)}
        name={genderData.name}
        items={genderData.items}
      />
      <CircleFilterItem
        value={style}
        setValue={(e: string) => setStyle(e)}
        name={styleData.name}
        items={styleData.items}
      />
      <RectangleFilterItem
        name={necklineData.name}
        items={necklineData.items}
        value={neckline}
        setValue={setNeckline}
      />
      <ColorFilterItem
        value={colors}
        setValue={(e: Color[]) => setColors(e)}
        name={colorData.name}
        items={colorData.items}
      />
    </div>
  );
};

export default filter;
