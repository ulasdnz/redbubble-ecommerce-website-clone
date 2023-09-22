import React from "react";
import CategoryItem from "./categoryItem";
import Data from "../../../data/data.json";
import Images from "./getCategoryImages";

type Props = {
  setSelectedCategory: Function;
};

const categories: React.FC<Props> = ({ setSelectedCategory }) => {
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
          image={Images[i]}
          title={category.title}
        />
      ))}
      <div className="mt-4 text-sm mb-12 ">
        {Data.header.links.map((link, i) => (
          <div key={i} className=" py-2 px-4 leading-6">{link}</div>
        ))}
      </div>
    </div>
  );
};

export default categories;
