import React from "react";
import CategoryItem from "./categoryItem";
import Data from "../../../data/data.json";
import Images from "./getCategoryImages";

const categories = () => {
  return (
    <div className="bg-white">
      {Data.header.categories.map((category, i) => (
        <CategoryItem key={i} image={Images[i]} title={category.title} />
      ))}
    </div>
  );
};

export default categories;
