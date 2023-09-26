"use client";
import React from "react";
import ExploreDesignCard from "../cards/exploreDesignCard";
import getImages from "./getImages";

type Props = {
  toggle: boolean;
};

const cards: React.FC<Props> = ({ toggle }) => {
  const data = getImages(toggle);
 
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar_hide" >
      {data.images.map((image,i) => (
        <ExploreDesignCard
        key={i}
          src={image}
          title={data.datas[i].title}
          artistName={data.datas[i].artistName}
          productNumber={data.datas[i].price}
        />
      ))}
    </div>
  );
};

export default cards;
