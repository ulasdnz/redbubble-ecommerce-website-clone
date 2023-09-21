"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import Data from "../../data/data.json";
import ButtonSvg from "../buttonSvg";
import HeaderLogo from "./logo";
import Discount from "./discount";
import HamburgerMenu from "./hamburger/hamburgerMenu";

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
    <header className="sm:hidden">
      <div className="bg-white w-full">
        <div
          style={
            shouldFixed && shouldFixCategories
              ? {
                  position: "fixed",
                  width: "100%",
                  top: "0",
                  overflowY: "hidden",
                  left: "0",
                  zIndex: 9999,
                  backgroundColor: "white",
                }
              : {}
          }
          className="flex justify-between items-center pr-2 pl-4 pb-0 pt-1"
        >
          <div className="flex">
            <HamburgerMenu/>
            <HeaderLogo />
          </div>
          <ButtonSvg />
        </div>
        <div
          style={
            shouldFixed
              ? shouldFixCategories
                ? {
                    position: "fixed",
                    top: "48px",
                    zIndex: 999,
                    left: "0",
                    backgroundColor: "white",
                  }
                : {
                    position: "fixed",
                    top: "0",
                    zIndex: 999,
                    left: "0",
                    backgroundColor: "white",
                  }
              : { position: "relative" }
          }
          className="flex-1 p-2 w-full"
        >
          <SearchBar />
        </div>
      </div>
      <Discount />
    </header>
  );
};

export default Header;
