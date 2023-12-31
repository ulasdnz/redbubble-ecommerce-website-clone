"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import CategoryLinkItem from "./categoryLinkItem";
import Data from "../../data/data.json";
import Button from "../button";
import ButtonSvg from "../buttonSvg";
import HeaderLogo from "./logo";
import Discount from "./discount";
import Profile from "./profile";

const Header = () => {
  const [shouldFixed, setShouldFixed] = useState(false);
  const [shouldFixCategories, setShouldFixCategories] = useState<boolean>(true);
  const lastPosition = useRef(0);

  const read = window.localStorage.getItem("auth");
  const auth = read && read.trim() == "true" ? true : false;

  const handleScroll = () => {
    const scrolledY = window.scrollY;
    const before = lastPosition.current;

    if (scrollY >= 60) {
      const bl = before - scrolledY > 0 ? true : false;
      setShouldFixCategories(bl);
      setShouldFixed(true);
    } else {
      setShouldFixCategories(false);
      setShouldFixed(false);
    }
    lastPosition.current = scrolledY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="max-sm:hidden z-10 relative">
      <div
        style={
          shouldFixed
            ? { position: "fixed", top: "0", left: "0" }
            : { position: "relative" }
        }
        className="bg-white w-full py-[14px] px-8 flex justify-center items-center "
      >
        <HeaderLogo />
        <div className="flex-1">
          <SearchBar />
        </div>
        {!auth ? (
          <div className="text-base flex items-center justify-center font-semibold color-[#19124f] mr-4">
            {Data.header.links.map((link, i) => (
              <Button src={link.link} title={link.title} key={i * 99} />
            ))}
          </div>
        ) : null}
        {auth ? <Profile /> : null}
        <ButtonSvg />
      </div>

      <div
        style={
          shouldFixed
            ? shouldFixCategories
              ? {
                  position: "fixed",
                  top: "88px",
                  overflowY: "hidden",
                  left: "0",
                  zIndex: -1,
                  backgroundColor: "white",
                }
              : {
                  position: "relative",
                  marginTop: "92px",
                  zIndex: -1,
                  overflowY: "hidden",
                }
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
      {!auth ? <Discount /> : null}
    </header>
  );
};

export default Header;
