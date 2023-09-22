import React from "react";
import Images from "./getDetailImages";
import Image from "next/image";
import Data from "../../../data/data.json";
import DetailItem from "./detailItem";

type Props = {
  categoryIndex: number;
  setSelectedCategory: Function;
};

const detail: React.FC<Props> = ({ categoryIndex, setSelectedCategory }) => {
  return (
    <div>
      <div
        className="relative w-[300px] h-[126px] hamburgerDetail"
        style={
          categoryIndex === 10
            ? { backgroundColor: "rgb(32, 48, 97)", zIndex: 9999 }
            : {}
        }
      >
        {categoryIndex != 10 ? (
          <Image
            width={300}
            height={126}
            alt="selected category image"
            src={Images[categoryIndex]}
            className="w-[300px] h-[126px] object-cover object-right "
          />
        ) : null}

        <div className="absolute z-10 bottom-4 left-4 ">
          <div
            onClick={() => setSelectedCategory({ isSelected: false, index: categoryIndex })}
            className="w-10 h-10 p-2 bg-white rounded-full mb-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M15 19a1 1 0 01-.71-.29l-6-6a1 1 0 010-1.42l6-6a1 1 0 111.42 1.42L10.41 12l5.3 5.29a1 1 0 010 1.42A1 1 0 0115 19z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-xl text-white font-semibold leading-[30px] ">
            {Data.header.categories[categoryIndex].title}
          </div>
        </div>
        <div className="pb-8">
          {Data.header.categories[categoryIndex].elements.map((element, i) => (
            <DetailItem key={i} categoryName={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default detail;
