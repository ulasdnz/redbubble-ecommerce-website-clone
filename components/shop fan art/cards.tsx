"use client";
import React, { useState } from "react";
import ExploreDesignCard from "../cards/exploreDesignCard";
import Data from "../../data/data.json";
import getImages from "./getImages";

type Props = {
  toggle: boolean;
};

const cards: React.FC<Props> = ({ toggle }) => {
  const data = getImages(toggle);
 
  return (
    <div className="flex gap-4 ">
      {data.images.map((image,i) => (
        <ExploreDesignCard
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
