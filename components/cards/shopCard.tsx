"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  artistName: string;
  itemNumber: number;
  price: number;
  handleItemNumberChange: (newCount: number) => void;
  handleDeleteItem: (itemSrc: string) => void;
};

const shopCard: React.FC<Props> = ({
  src,
  title,
  artistName,
  price,
  itemNumber,
  handleItemNumberChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRightHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft + 930 >= maxScrollLeft) {
      }
      scrollContainer.scrollLeft += 930;
    }
    setIsOpen(true);
  };
  const scrollLeftHandle = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const currentScrollLeft = scrollContainer.scrollLeft;
      const newScrollLeft = currentScrollLeft - 930; // Adjust the value as needed
      scrollContainer.scrollLeft = newScrollLeft;
    }
    setIsOpen(false);
  };
  return (
    <div
      ref={scrollContainerRef}
      className="w-full overflow-hidden scroll-smooth flex justify-between pb-3 pt-6 border-t-[1px] border-[#D6DADF] borders-solid "
      style={isOpen ? { backgroundColor: "#F9F9FB" } : {}}
    >
      <div className="flex">
        <Image
          width={128}
          height={128}
          alt="selected product image"
          src={src}
          className="w-[128px] h-[128px]"
        />
        <div className="flex flex-col max-w-[175px] ml-4">
          <div className="text-base font-semibold leading-7">{title}</div>
          <div className="text-sm text-[rgb(117,113,149)]">{artistName}</div>
        </div>
      </div>
      <div className="flex h-12 items-center">
        <div
          onClick={() => {
            if (isOpen) return;
            if (itemNumber - 1 < 1) {
              setIsOpen(true);
              scrollRightHandle();
              return;
            }
            handleItemNumberChange(itemNumber - 1);
          }}
          className="w-8 h-8 rounded-full bg-[rgba(233,233,240,0.6)] p-1 mr-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 12c0-.552.474-1 1.059-1h9.882c.585 0 1.059.448 1.059 1s-.474 1-1.059 1H7.06C6.474 13 6 12.552 6 12z"></path>
          </svg>
        </div>
        <input
          value={itemNumber}
          onChange={(e) => {
            if (e.target.value == "") return;
            const newCount = parseInt(e.target.value);
            if (newCount < 1) return setIsOpen(true);
            handleItemNumberChange(newCount);
          }}
          className="mr-1 pl-[19px] py-2 w-[52px] h-[40px] border-2 
                     border-[#D6DADF] outline-[#AFA3F2] border-solid rounded-lg"
        ></input>
        <div
          onClick={() => {
            if (!isOpen) handleItemNumberChange(itemNumber + 1);
          }}
          className="w-8 h-8 p-1 rounded-full bg-[rgba(233,233,240,0.6)] cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 6c.552 0 1 .474 1 1.059v9.882c0 .585-.448 1.059-1 1.059s-1-.474-1-1.059V7.06c0-.586.448-1.06 1-1.06z"></path>
            <path d="M6 12c0-.552.474-1 1.059-1h9.882c.585 0 1.059.448 1.059 1s-.474 1-1.059 1H7.06C6.474 13 6 12.552 6 12z"></path>
          </svg>
        </div>
      </div>
      <div className="text-center">
        <div>
          <del className="text-[#757195] leading-7">
            ${(price * itemNumber).toFixed(2)}
          </del>
        </div>
        <div className="font-semibold text-[#755EED] leading-7">
          ${(price * itemNumber * 0.8).toFixed(2)}
        </div>
      </div>
      <div
        className="w-6 h-6 mt-3 cursor-pointer"
        onClick={() => {
          if (!isOpen) scrollRightHandle();
          else scrollLeftHandle();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.71 12.29a1 1 0 010 1.42 1 1 0 01-1.42 0L12 13.41l-2.29 2.3a1 1 0 01-1.42 0 1 1 0 010-1.42l2.3-2.29-2.3-2.29a1 1 0 011.42-1.42l2.29 2.3 2.29-2.3a1 1 0 011.42 1.42L13.41 12z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div
        className="flex justify-center items-center text-white font-semibold cursor-pointer
      -mr-[195px] -mt-10 w-[140px] h-[175px] bg-red-500"
      >
        Remove
      </div>
    </div>
  );
};

export default shopCard;
