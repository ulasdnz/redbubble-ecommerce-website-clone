import React from "react";
import PopupCard from "../popupCard";

type Product = {
    title: string;
    image: string;
    backgroundColor: string;
}

type Props = {
    populerProducts: Product[];
}

const populerProducts: React.FC<Props> = ({populerProducts}) => {
  return (
    <div>
      <div className="text-[14px] font-semibold mb-3 mt-7">
        Popular products
      </div>
      <div className="grid grid-cols-3 gap-4">
        <PopupCard
          title="Masks"
          image="https://d23mnqickg7hnq.cloudfront.net/images/masks-9a19322a6fefb09b452b3a869703046b.jpg"
          backgroundColor="#9fd8eb"
        />
        <PopupCard
          title="Stickers"
          image="https://d23mnqickg7hnq.cloudfront.net/images/stickers-0e4cfde2e32342af5182db7be710864a.jpg"
          backgroundColor="#ea91a6"
        />
        <PopupCard
          title="T-Shirts"
          image="https://d23mnqickg7hnq.cloudfront.net/images/t-shirts-4f7b6badee5ad9867b7edd7c6e530995.jpg"
          backgroundColor="#dabaa1"
        />
      </div>
    </div>
  );
};

export default populerProducts;
