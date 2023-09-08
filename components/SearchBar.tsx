"use client";
import React, { useState, useRef } from "react";
import styles from "./search.module.css";
import ArtistCard from "./artistCard";
import PopupCard from "./popupCard";
import PopupCardSm from "./popupCard_sm";
import UseClickOutside from "../hooks/useOutsideClick"

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
      <div className="mr-6 ">
        <div className={styles.loop}>
          <input
            id="search"
            className="z-10 w-full h-[56px] bg-[#f2f2f6] outline-none p-4 popup 
             focus:h-[56px]"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            ref={inputElement}
            onClick={handleClick}
            placeholder={isOpen ? "Search designs and products" : ""}
          ></input>
          <div className="absolute w-6 h-6 z-30 right-5 top-[18px]">
            <span>
              <span
                style={{color:"currentcolor"}} >
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
          {!isOpen ? (
            <div
              className="absolute top-[calc(50%-12px)] left-4 text-zinc-500 searchbar_placeholder"
              onClick={handleClick}
            ></div>
          ) : null}
          {isOpen ? (
            <div ref = {popupRef} className="py-2 search_popup h-[780px] w-full  absolute border-0 text-[#19124f]">
              <div className="pt-6 flex justify-between ">
                <div className="flex-[flex:1_0_auto] shrink-0 ">
                  <div className="flex flex-col   justify-center px-6">
                    <div className="leading-6	mb-2 pl-1  font-semibold">
                      Trending searches
                    </div>
                    <div className="p-1">
                      <div className="min-w-[280px] hover:bg-[#F3F3F5] p-1 py-[5px] cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 00-1.41 0l-6 6.01a.996.996 0 101.41 1.41L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 00.85-.35V6.5a.48.48 0 00-.49-.5h-4.29a.5.5 0 00-.36.85z"></path>
                          </svg>
                        </span>
                        jimmy buffett
                      </div>
                    </div>
                    <div className="p-1">
                      <div className="min-w-[280px] hover:bg-[#F3F3F5] p-1 py-[5px] cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 00-1.41 0l-6 6.01a.996.996 0 101.41 1.41L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 00.85-.35V6.5a.48.48 0 00-.49-.5h-4.29a.5.5 0 00-.36.85z"></path>
                          </svg>
                        </span>
                        vote yes
                      </div>
                    </div>
                    <div className="p-1">
                      <div className="min-w-[280px] hover:bg-[#F3F3F5] p-1 py-[5px] cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 00-1.41 0l-6 6.01a.996.996 0 101.41 1.41L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 00.85-.35V6.5a.48.48 0 00-.49-.5h-4.29a.5.5 0 00-.36.85z"></path>
                          </svg>
                        </span>
                        thoughts and stares
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden   scroll-smooth scrollbar-hide pr-7 mb-4 ">
                  <div className="text-[14px] font-semibold mb-4">
                    Top artists
                  </div>
                  <div
                    ref={scrollContainerRef}
                    className="flex-[0_1_50%] overflow-hidden  transition-all	 scroll-smooth scrollbar-hide"
                  >
                    <div className="relative ">
                      <div className="flex ">
                        <ArtistCard
                          name="snazzyseagull"
                          url="https://ih0.redbubble.net/avatar.8260447.140x140.jpg"
                        />
                        <ArtistCard
                          name="stevenrhodes"
                          url="https://ih0.redbubble.net/avatar.1433098.140x140.jpg"
                        />
                        <ArtistCard
                          name="pikaole"
                          url="https://ih0.redbubble.net/avatar.1867616.140x140.jpg"
                        />
                        <ArtistCard
                          name="ilustrata"
                          url="https://ih0.redbubble.net/avatar.1124788.140x140.jpg"
                        />
                        <ArtistCard
                          name="KittyCrusAIDe"
                          url="https://ih0.redbubble.net/avatar.8617307.140x140.jpg"
                        />
                        <ArtistCard
                          name="Catwithhardhat"
                          url="https://ih0.redbubble.net/avatar.5263922.140x140.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[14px] font-semibold mb-3 mt-7">
                    Popular products
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <PopupCard
                      title="Masks"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/masks-9a19322a6fefb09b452b3a869703046b.jpg"
                      backgroundColor="#9fd8eb"
                    />
                    <PopupCard
                      title="Stickers"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/stickers-0e4cfde2e32342af5182db7be710864a.jpg"
                      backgroundColor="#ea91a6"
                    />
                    <PopupCard
                      title="T-Shirts"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/t-shirts-4f7b6badee5ad9867b7edd7c6e530995.jpg"
                      backgroundColor="#dabaa1"
                    />
                  </div>
                  <div className="text-[14px] font-semibold mb-3 mt-7">
                    Quick links
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <PopupCardSm
                      title="Fan Art Merch"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/fan-art-merch-9e1fcdb53974dea6d3a20e16d44e7fdb.jpg"
                      backgroundColor="#041d41"
                    />
                    <PopupCardSm
                      title="Gift cards"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/gift-ideas-2b90c08d546a189cf1239b339caa4ce9.jpg"
                      backgroundColor="#ff8998"
                    />
                    <PopupCardSm
                      title="Gift ideas"
                      image="https://d23mnqickg7hnq.cloudfront.net/images/gift-ideas-2b90c08d546a189cf1239b339caa4ce9.jpg"
                      backgroundColor="#c69f7b"
                    />
                  </div>
                  <div className="mt-8 w-full flex justify-between">
                    <div className="pr-2">
                      <div className="hover:bg-[#F3F3F5] p-1 flex py-[5px] cursor-pointer ">
                        <div className="mt-1">
                          <span className="w-4 h-4 inline-block mr-2 ">
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M9.296 5.704c0 .56.45 1 1 1h5.59l-10.89 10.89a.996.996 0 101.41 1.41l10.89-10.89v5.59c0 .55.45 1 1 1s1-.45 1-1v-8c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"
                                fill="#currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div>Where's my order?</div>
                      </div>
                      <div className="hover:bg-[#F3F3F5] p-1 flex py-[5px] cursor-pointer mt-4">
                        <div className="mt-1">
                          <span className="w-4 h-4 inline-block mr-2 ">
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M9.296 5.704c0 .56.45 1 1 1h5.59l-10.89 10.89a.996.996 0 101.41 1.41l10.89-10.89v5.59c0 .55.45 1 1 1s1-.45 1-1v-8c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"
                                fill="#currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div>Customer support</div>
                      </div>
                    </div>

                    <div className="pl-2 ">
                      <div className="hover:bg-[#F3F3F5] p-1 flex py-[5px] cursor-pointer ">
                        <div className="mt-1">
                          <span className="w-4 h-4 inline-block mr-2 ">
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M9.296 5.704c0 .56.45 1 1 1h5.59l-10.89 10.89a.996.996 0 101.41 1.41l10.89-10.89v5.59c0 .55.45 1 1 1s1-.45 1-1v-8c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"
                                fill="#currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div>Worldwide shipping</div>
                      </div>
                      <div className="hover:bg-[#F3F3F5] p-1 flex py-[5px] cursor-pointer mt-4">
                        <div className="mt-1">
                          <span className="w-4 h-4 inline-block mr-2 ">
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M9.296 5.704c0 .56.45 1 1 1h5.59l-10.89 10.89a.996.996 0 101.41 1.41l10.89-10.89v5.59c0 .55.45 1 1 1s1-.45 1-1v-8c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"
                                fill="#currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div>Coupons and promos</div>
                      </div>
                    </div>
                  </div>
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
