import React from "react";
import Headline from "./headline";
import Janr from "./janr";
import Data from "../../../../data/data.json";
import Products from "./products";
type Product = {
  artistName: string;
  src:string;
  title:string;
  price:number
}

type Props = {
  products: Product[];
}
const index: React.FC<Props> = ({products}) => {
  return (
    <div className="overflow-x-hidden ">
      <Janr janr={Data.tshirts.janr} />
      <Headline />
      <Products products={products} />
    </div>    
  );
};

export default index;
