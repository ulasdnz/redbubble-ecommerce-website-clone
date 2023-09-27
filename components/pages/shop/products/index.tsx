import React from "react";
import Headline from "./headline";
import Janr from "./janr";
import Data from "../../../../data/data.json";
import Products from "./products";

const index = () => {
  return (
    <div className="overflow-x-hidden ">
      <Janr janr={Data.tshirts.janr} />
      <Headline />
      <Products products={Data.tshirts.products} />
    </div>    
  );
};

export default index;
