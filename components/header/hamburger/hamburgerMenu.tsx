"use client";
import React, { useState, useRef } from "react";
import Categories from "./categories";
import UseClickOutside from "@/hooks/useOutsideClick";

const hamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeSmooth, setCloseSmooth] = useState<boolean>(false);

  const popupRef = useRef<HTMLDivElement>(null);
  UseClickOutside(popupRef, () => {
    setIsOpen(false)
    setCloseSmooth(true)
  });
  const menuClassName = isOpen
    ? "fixed w-[300px] h-full top-0 left-0 z-[9999999999] hamburger bg-white"
    : "fixed w-[300px] h-full top-0 left-0 z-[9999999999] hamburgerClose bg-white";
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
      {isOpen || closeSmooth ? <div ref={popupRef} className={menuClassName}>
        <div className="w-full h-auto bg-white">
          <div className="p-4 bg-[rgba(233,233,240,0.6)] leading-[26px] ">
            <div>Hi there!</div>
            <div>
              <span className="font-semibold">Log In</span> or
              <span className="font-semibold"> Sign Up</span>
            </div>
          </div>
        </div>
        <Categories />
      </div>:null}
      {isOpen ? (
        <div>
          <div className="back"></div>
        </div>
      ) : null}
    </div>
  );
};

export default hamburgerMenu;
