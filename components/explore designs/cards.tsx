import React from "react";
import ExploreDesignCard from "../cards/exploreDesignCard";
import Data from "../../data/data.json";
import getImages from "./getImages";

const cards = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar_hide">
      {Data.home.exploreDesigns.map((item, i) => (
        <ExploreDesignCard
          key={i}
          src={getImages()[i]}
          title={item.title}
          artistName={item.artistName}
          productNumber={item.productNumber}
        />
      ))}
    </div>
  );
};

export default cards;
