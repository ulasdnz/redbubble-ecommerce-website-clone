import React from "react";
import CategoryItem from "./categoryItem";
import Data from "../../../data/data.json";

type Props = {
  setSelectedCategory: Function;
};

const categories: React.FC<Props> = ({ setSelectedCategory }) => {
  const images = Array.from({ length: 11 }, (_, number) => {
    const ext = `img${number + 1}.jpg`;
    return `/home/header/hamburger/categories/${ext}`; // Update the path as needed
  })
  return (
    <div className="bg-white overflow-y-auto">
      <div className="w-full h-auto bg-white">
        <div className="p-4 bg-[rgba(233,233,240,0.6)] leading-[26px] ">
          <div>Hi there!</div>
          <div>
            <span className="font-semibold">Log In</span> or
            <span className="font-semibold"> Sign Up</span>
          </div>
        </div>
      </div>
      {Data.header.categories.map((category, i) => (
        <CategoryItem
          key={i}
          index={i}
          setSelectedCategory={setSelectedCategory}
          image={images[i]}
          title={category.title}
        />
      ))}
      <div className="mt-4 text-sm mb-12 ">
        {Data.header.links.map((link, i) => (
          <div key={i} className=" py-2 px-4 leading-6">{link.title}</div>
        ))}
      </div>
    </div>
  );
};

export default categories;
