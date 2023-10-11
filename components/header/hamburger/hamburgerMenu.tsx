"use client";
import React, { useState, useEffect, useRef } from "react";
import Categories from "./categories";
import Detail from "./detail";
import UseClickOutside from "@/utils/useOutsideClick";

type Selection = {
  isSelected: boolean;
  index: number;
};

const hamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeSmooth, setCloseSmooth] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Selection>({
    isSelected: false,
    index: 0,
  });

  const popupRef = useRef<HTMLDivElement>(null);
  UseClickOutside(popupRef, () => {
    setIsOpen(false);
    setCloseSmooth(true);
    setSelectedCategory({ isSelected: false, index: 0 });
  });

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "visible";
      setTimeout(() => setCloseSmooth(false), 500);
    }
  }, [isOpen]);

  const menuClassBase =
    "fixed w-[300px] h-full top-0 left-0 z-[9999999999]  bg-white overflow-y-auto";
  const hamburgerClose = menuClassBase + " hamburgerClose";
  const hamburgerOpen = menuClassBase + " hamburger";
  const menuClassName = isOpen ? hamburgerOpen : hamburgerClose;

  const detailBase =
    "absolute w-[300px] h-full  bg-white z-[9999999999999999] overflow-y-auto";
  const detailClass = selectedCategory.isSelected
    ? detailBase + " hamburger_detail_open"
    : detailBase + " hamburger_detail_close";

  return (
    <div>
      <div className="w-6 h-6 mr-4 mt-[1px]" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 5h18a1 1 0 011 1 1 1 0 01-1 1H3a1 1 0 01-1-1 1 1 0 011-1zm0 6h18a1 1 0 011 1 1 1 0 01-1 1H3a1 1 0 01-1-1 1 1 0 011-1zm0 6h18a1 1 0 011 1 1 1 0 01-1 1H3a1 1 0 01-1-1 1 1 0 011-1z"></path>
        </svg>
      </div>
      {isOpen || closeSmooth ? (
        <div ref={popupRef} className={menuClassName}>
          <div className={selectedCategory.isSelected ? hamburgerClose : ""}>
            <Categories
              setSelectedCategory={(e: Selection) => {
                setSelectedCategory(e);
                setCloseSmooth(true);
              }}
            />
          </div>
          {closeSmooth && isOpen ? (
            <div className={detailClass}>
              <Detail
                setSelectedCategory={(e: Selection) => {
                  setSelectedCategory(e);
                }}
                categoryIndex={selectedCategory.index}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {isOpen ? (
        <div>
          <div className="back"></div>
        </div>
      ) : null}
    </div>
  );
};

export default hamburgerMenu;
