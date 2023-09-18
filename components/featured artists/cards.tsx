"use client";
import React, { useState, useRef } from "react";
import FeaturedArtistCard from "../cards/featuredArtistCard";
import { getImages, getAvatars } from "./getFeaturedArtistImages";
import Data from "../../data/data.json";

const cards = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [opacityOfArrow, setOpacityOfArrow] = useState(1);

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
  return (
    <div className="mt-6 relative ">
      <div
        ref={scrollContainerRef}
        className=" pb-2 pl-1 flex flex-nowrap w-full justify-between overflow-hidden  scroll-smooth scrollbar-hide"
      >
        {getImages().map((item: any, i: number) => (
          <FeaturedArtistCard
            key={i}
            image={item}
            avatar={getAvatars()[i]}
            title={Data.home.featuredArtists[i].title}
          />
        ))}
      </div>
      <div
        className="absolute z-20 p-1 top-[44%] -right-5 bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer active:border-[3px] active:border-solid active:border-[#AFA3F2]
                      "
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
          className="absolute  z-20 p-1 top-[43%] -left-5 bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer  active:border-[3px] active:border-solid active:border-[#AFA3F2]
                      "
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
  );
};

export default cards;
