import React from "react";
import PopupCard from "../popupCard";
import img1 from "../../../public/home/header/popup/populer products/img1.jpg"
import img2 from "../../../public/home/header/popup/populer products/img2.jpg"
import img3 from "../../../public/home/header/popup/populer products/img3.jpg"

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
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-[repeat(1,minmax(0px,1fr))]">
        <PopupCard
          title="Masks"
          image={img1}
          backgroundColor="#9fd8eb"
        />
        <PopupCard
          title="Stickers"
          image={img2}
          backgroundColor="#ea91a6"
        />
        <PopupCard
          title="T-Shirts"
          image= {img3}
          backgroundColor="#dabaa1"
        />
      </div>
    </div>
  );
};

export default populerProducts;
