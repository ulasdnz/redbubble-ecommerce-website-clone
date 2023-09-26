import React from "react";
import GroupHeadline from "../groupHeadline";
import HomeRangeCard from "../cards/HomeRangeCard";
import SvgCard from "../cards/svgCard";
import SvgCardSmall from "../cards/svgCardSmall";
import { StaticImageData } from "next/image"
import svg1 from "../../public/home/Shop Product Range/svg1.svg"
import svg2 from "../../public/home/Shop Product Range/svg2.svg"
import svg3 from "../../public/home/Shop Product Range/svg3.svg"

const svgs: StaticImageData[] = [svg1, svg2, svg3]

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
  const images = Array.from({ length: 12 }, (_, number) => {
    const ext = `img${number + 1}.jpg`;
    return `/home/Shop%20Product%20Range/${ext}` // Update the path as needed
  })
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
                    isBigger={i === 2}
                    key={i}
                    buttonTitle={product.buttonTitle}
                    src={images[i]}
                  />
                )
            )}
            {svgCards.map((item, i) => (
              <SvgCard
                key={i}
                src={svgs[i]}
                title={item.title}
                description={item.description}
              />
            ))}
            {svgCards.map((item, i) => (
              <SvgCardSmall
                key={i}
                src={svgs[i]}
                title={item.title}
                description={item.description}
                rowNumber={3 + i}
              />
            ))}

            {imageCards.map(
              (product, i) =>
                i >= 3 && (
                  <HomeRangeCard
                    isBigger={i === 7}
                    key={i}
                    buttonTitle={product.buttonTitle}
                    src={images[i]}
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
