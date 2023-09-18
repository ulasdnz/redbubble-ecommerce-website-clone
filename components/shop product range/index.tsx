import React from "react";
import GroupHeadline from "../groupHeadline";
import HomeRangeCard from "../cards/HomeRangeCard";
import SvgCard from "../cards/svgCard";
import getShopProductImages from "./getShopProductImages";
import getShopProductSvgs from "./getShopProductSvgs";

type ImageCard = {
  buttonTitle: string;
  src: string;
};

type SvgCard = { src: string; title: string; description: string };

type Props = {
  imageCards: ImageCard[];
  svgCards: SvgCard[];
};

const index: React.FC<Props> = ({ imageCards, svgCards }) => {
  return (
    <div className="flex justify-center">
      <div className="px-4 pt-4 w-full max-w-[1180px]">
        <div>
          <GroupHeadline title="Shop Product Range" />
          <div className="p-3"></div>
          <div className="homeRangeCardWrapper">
            {imageCards.map(
              (product, i) =>
                i < 3 && (
                  <HomeRangeCard
                    key={i}
                    buttonTitle={product.buttonTitle}
                    src={getShopProductImages()[i]}
                  />
                )
            )}
            {svgCards.map((item, i) => (
              <SvgCard
                key={i}
                src={getShopProductSvgs()[i]}
                title={item.title}
                description={item.description}
              />
            ))}
            {imageCards.map(
              (product, i) =>
                i >= 3 && (
                  <HomeRangeCard
                    key={i}
                    buttonTitle={product.buttonTitle}
                    src={getShopProductImages()[i]}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
