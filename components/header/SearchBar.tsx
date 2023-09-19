"use client";
import React, { useState, useRef } from "react";
import styles from "./search.module.css";
import UseClickOutside from "../../hooks/useOutsideClick";
import TopArtists from "./popup/topArtists";
import Data from "../../data/data.json";
import PopulerProducts from "./popup/populerProducts";
import QuickLinks from "./popup/quickLinks";
import TrendingSearches from "./popup/trendingSearches";
import BottomDetail from "./popup/bottomDetail";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [opacityOfArrow, setOpacityOfArrow] = useState(1);

  const inputElement = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  UseClickOutside(popupRef, () => setIsOpen(false));

  const handleClick = (): void => {
    setIsOpen(true);
    if (inputElement.current) inputElement.current.focus();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setInputValue(target.value);
    }
  };

  const scrollRightHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft + 200 >= maxScrollLeft) {
        setOpacityOfArrow(0.4);
      }
      scrollContainer.style.transition =
        "scroll-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      scrollContainer.scrollLeft += 200;
      setShowScroll(true);
    }
  };
  const scrollLeftHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const currentScrollLeft = scrollContainer.scrollLeft;

      if (currentScrollLeft - 200 < 1) setShowScroll(false);
      const newScrollLeft = currentScrollLeft - 200; // Adjust the value as needed

      scrollContainer.scrollLeft = newScrollLeft;
      setOpacityOfArrow(1);
    }
  };

  return (
    <>
      <div className="mr-5 ">
        <div className={styles.loop}>
          <input
            id="search"
            className="z-10 w-full h-[56px] bg-[#f2f2f6]  outline-none p-4 popup 
             focus:h-[56px]"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            ref={inputElement}
            onClick={handleClick}
            placeholder={isOpen ? "Search designs and products" : ""}
          ></input>
          <div className="absolute w-6 h-6 z-30 right-5 top-[18px]">
            <span>
              <span style={{ color: "currentcolor" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path>
                  <path d="M21 22c-.3 0-.5-.1-.7-.3L16 17.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.3 4.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
                </svg>
              </span>
            </span>
          </div>
          <div className="w-full h-full bg-red-500 ">
            {!isOpen ? (
              <div
                className="absolute  max-w-full top-[calc(50%-12px)] left-4 text-zinc-500 searchbar_placeholder"
                onClick={handleClick}
              ></div>
            ) : null}
          </div>
          {isOpen ? (
            <div
              ref={popupRef}
              className="py-2 mt-1 bg-white search_popup h-[780px] w-full z-[100000] absolute border-0 text-[#19124f]"
            >
              <div className="pt-6 flex justify-between ">
                <TrendingSearches />
                <div className="overflow-hidden   scroll-smooth scrollbar-hide pr-7 mb-4 ">
                  <div className="text-[14px] font-semibold mb-4">
                    Top artists
                  </div>
                  <div
                    ref={scrollContainerRef}
                    className="flex-[0_1_50%] overflow-hidden  transition-all	 scroll-smooth scrollbar-hide"
                  >
                    <TopArtists topArtists={Data.home.topArtists} />
                  </div>
                  <PopulerProducts
                    populerProducts={Data.home.populerProducts}
                  />
                  <QuickLinks quickLinks={Data.home.quickLinks} />
                  <BottomDetail />
                </div>
              </div>

              <div
                className="absolute z-20 p-1 top-[105px] right-8 bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer	active:right-11 active:border-[3px] active:border-solid active:border-[#AFA3F2]
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
                  className="absolute  z-20 p-1 top-[105px] left-[320px] bg-white rounded-full	search_popup_caruosel_arrow 
                      cursor-pointer	active:left-[325px] active:border-[3px] active:border-solid active:border-[#AFA3F2]
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
          ) : null}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SearchBar;
