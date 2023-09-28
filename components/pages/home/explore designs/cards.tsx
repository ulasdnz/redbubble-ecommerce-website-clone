import React from "react";
import ExploreDesignCard from "../../../cards/exploreDesignCard";
import Data from "../../../../data/data.json";

const cards = () => {
  const images = Array.from({ length: 5 }, (_, number) => {
    const ext = `image_${number + 1}.jpg`;
    return `/home/explore%20designs/${ext}`; // Update the path as needed
  });

  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar_hide">
      {Data.home.exploreDesigns.map((item, i) => (
        <ExploreDesignCard
          key={i}
          src={images[i]}
          title={item.title}
          artistName={item.artistName}
          productNumber={item.productNumber}
        />
      ))}
    </div>
  );
};

export default cards;
