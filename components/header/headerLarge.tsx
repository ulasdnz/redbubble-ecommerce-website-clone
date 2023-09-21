"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import CategoryLinkItem from "./categoryLinkItem";
import Data from "../../data/data.json";
import Button from "../button";
import ButtonSvg from "../buttonSvg";
import HeaderLogo from "./logo";
import Discount from "./discount";

const Header = () => {
  const [shouldFixed, setShouldFixed] = useState(false);
  const [shouldFixCategories, setShouldFixCategories] = useState<boolean>(true);
  const lastPosition = useRef(0);

  const handleScroll = () => {
    const scrolledY = window.scrollY;
    const before = lastPosition.current;
    console.log("scrolledY ", scrolledY);
    console.log("lastScrollY ", lastPosition.current);

    if (scrollY >= 60) {
      const bl = before - scrolledY > 0 ? true : false;
      setShouldFixCategories(bl);
      console.log(bl);
      setShouldFixed(true);
    } else {
      setShouldFixCategories(false);
      setShouldFixed(false);
    }
    lastPosition.current = scrolledY;
    console.log(shouldFixCategories);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="max-sm:hidden">
      <div
        style={
          shouldFixed
            ? { position: "fixed", top: "0", left: "0" }
            : { position: "relative" }
        }
        className="bg-white w-full py-4 px-8 flex justify-center items-center"
      >
        <HeaderLogo />
        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="text-base flex items-center justify-center font-semibold color-[#19124f] mr-4">
          {Data.header.links.map((link, i) => (
            <Button title={link} key={i * 99} />
          ))}
        </div>
        <ButtonSvg />
      </div>

      <div
        style={
          shouldFixed
            ? shouldFixCategories
              ? {
                  position: "fixed",
                  top: "91px",
                  overflowY: "hidden",
                  left: "0",
                  zIndex: -1,
                  backgroundColor: "white",
                }
              : { position: "relative", marginTop: "92px", overflowY: "hidden" }
            : { position: "relative" }
        }
        className=" w-full h-[54px] max-[1157px]:h-[80px] flex justify-between items-center px-8 search_link_items 
        overflow-auto content-box 
       "
      >
        {Data.header.categories.map((category, i) => (
          <CategoryLinkItem
            key={(i + 1) * 31}
            title={category.title}
            elements={category.elements}
            isLastOne={category.isLastOne}
            shouldFixCategories={shouldFixCategories || !shouldFixed}
          />
        ))}
      </div>

      {shouldFixed && shouldFixCategories ? (
        <div className="pt-[200px]"></div>
      ) : null}
      <Discount />
    </header>
  );
};

export default Header;
