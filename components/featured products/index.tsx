"use client";
import React, { useState, useRef } from "react";
import GroupHeadline from "../groupHeadline";
import FeaturedProductCard from "../cards/featuredProductCard";
import Data from "../../data/data.json";
import getFeaturedProductImages from "./getFeaturedProductImages";

const index = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [opacityOfArrow, setOpacityOfArrow] = useState(1);
  const [images, setImages] = useState(getFeaturedProductImages())

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRightHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft + 930 >= maxScrollLeft) {
        setOpacityOfArrow(0.4);
      }
      scrollContainer.style.transition =
        "scroll-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      scrollContainer.scrollLeft += 930;
      setShowScroll(true);
    }
  };
  const scrollLeftHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const currentScrollLeft = scrollContainer.scrollLeft;

      if (currentScrollLeft - 930 < 1) setShowScroll(false);
      const newScrollLeft = currentScrollLeft - 930; // Adjust the value as needed

      scrollContainer.scrollLeft = newScrollLeft;
      setOpacityOfArrow(1);
    }
  };

  let render: any = [];
  for (let i = 0; i < Data.home.featuredProducts.length; i = i + 2) {
    render.push(
      <div key={i}> 
        <FeaturedProductCard
          src={images[i]}
          title={Data.home.featuredProducts[i].title}
          artistName={Data.home.featuredProducts[i].artistName}
          price={Data.home.featuredProducts[i].price}
        />
        {Data.home.featuredProducts[i + 1] ? (
          <FeaturedProductCard
            src={images[i + 1]}
            title={Data.home.featuredProducts[i + 1].title}
            artistName={Data.home.featuredProducts[i + 1].artistName}
            price={Data.home.featuredProducts[i + 1].price}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-2 ">
      <div className="pt-8 relative pl-3 pr-1 w-full max-w-[1170px] h-auto max-sm:pl-4 overflow-hidden">
        <div>
          <GroupHeadline title="Featured products" />
          <div
            ref={scrollContainerRef}
            className="flex gap-3 justify-between pt-1 h-auto overflow-x-scroll scroll-smooth scrollbar_hide"
          >
            {render}
          </div>
          <div
            className="absolute z-20 p-1 top-[52%] right-1 bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer active:border-[3px] active:border-solid active:border-[#AFA3F2]
                      max-sm:hidden"
            style={{
              opacity: opacityOfArrow,
              cursor: opacityOfArrow == 1 ? "pointer" : "not-allowed",
            }}
            onClick={() => scrollRightHandle()}
          >
            <svg
              className=" w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {showScroll ? (
            <div
              className="absolute  z-20 p-1 top-[51%] left-1 bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer  active:border-[3px] active:border-solid active:border-[#AFA3F2]
                      max-sm:hidden "
              onClick={() => scrollLeftHandle()}
            >
              <svg
                className=" w-8 h-8 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 19a1 1 0 01-.71-.29 1 1 0 010-1.42l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.42l-6 6A1 1 0 019 19z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default index;
