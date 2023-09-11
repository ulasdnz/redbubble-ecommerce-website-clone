"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import HeaderHoverCard from "./headerHoverCard";

const Header = () => {
  const [shouldFixed, setShouldFixed] = useState(false);
  const [shouldFixCategories, setShouldFixCategories] = useState<boolean>();
  const lastPosition = useRef(0);

  // Function to handle scroll event
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
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className="w-full h-[60px] bg-gradient-to-r from-[#755EED] to-[#5137DA] text-white leading-7	
       flex items-center justify-center"
      >
        <span className="text-xl">
          Up to 40% off&nbsp;
          <a
            className="underline font-bold"
            href="https://www.redbubble.com/explore/"
          >
            sitewide
          </a>
          &nbsp;with code&nbsp;
          <strong className="font-bold	bg-[#0000004d] px-2 py-[1px] pb-[3px] rounded">
            YOUDESERVEIT
          </strong>
        </span>
      </div>
      <div
        style={shouldFixed ? { position: "fixed", top: "0", left: "0" } : {}}
        className="bg-white w-full py-4 px-8 flex justify-center items-center"
      >
        <div>
          <a className="w-[180px] block mr-6" href="/">
            <svg
              role="img"
              data-testid="ds-2019-logo"
              viewBox="0 0 197 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Redbubble logo</title>
              <path
                data-testid="ds-wordmark"
                fill="#333"
                d="m68.434 34.027-0.11764-3.2012c-0.062742-1.7555-0.19868-5.8429-0.19868-5.8429-0.078428-2.5215-0.59605-4.4024-3.1044-5.0821v-0.12026c2.1097-0.84049 3.5815-3.2025 3.5815-6.4023 0-5.0442-2.3881-7.3644-7.0062-7.3644h-7.0847v28.013h4.5371v-11.525h2.1894c1.7908 0 2.4287 1.081 2.4679 2.9607l0.16078 5.7645a123.59 123.59 0 0 1 0.0366 2.7999h4.5384zm-4.4965-18.408c-0.039214 1.6405-0.59605 3.3619-2.7463 3.3619h-2.1515v-8.8846h2.1894c2.0313 0 2.7868 1.8012 2.7476 3.3214l-0.039214 2.2012zm133.81 18.408v-4.1619h-7.2846v-8.3238h5.9318v-4.1619h-5.9318v-7.2036h7.286v-4.1619h-11.824v28.013h11.824-0.001307zm-14.461 0v-4.1619h-7.286v-23.851h-4.5384v28.013h11.824zm-20.76 0c3.3057 0 6.171-2.4012 6.171-7.963 0-3.2822-1.6313-5.5632-3.8221-6.3239v-0.15816c2.2705-0.96074 3.6639-3.2809 3.6639-6.3631 0-5.2024-2.5489-7.2036-6.4102-7.2036h-7.6833v28.013h8.0807v-0.001307zm1.2745-19.049c-0.039214 1.9999-1.3542 2.9214-2.5489 2.9214h-2.3084v-7.8036h2.23c1.911 0 2.7058 0.92022 2.6666 3.1606l-0.039214 1.7215zm0.2392 11.605c0 2.2417-0.91499 3.4025-2.9071 3.4025h-2.1894v-8.4049h2.0705c1.911 0 3.026 1.362 3.026 3.2025v1.7999zm-18.546 7.4441c3.3044 0 6.1697-2.4012 6.1697-7.963 0-3.2822-1.6313-5.5632-3.8207-6.3239v-0.15816c2.2692-0.96074 3.6626-3.2809 3.6626-6.3631 0-5.2024-2.5489-7.2036-6.4102-7.2036h-7.6833v28.013h8.082v-0.001307zm1.2745-19.049c-0.040521 1.9999-1.3542 2.9214-2.5489 2.9214h-2.3084v-7.8036h2.2287c1.911 0 2.7071 0.92022 2.6666 3.1606l-0.039214 1.7215h0.001307zm0.2379 11.605c0 2.2417-0.91499 3.4025-2.9058 3.4025h-2.1894v-8.4049h2.0692c1.911 0 3.026 1.362 3.026 3.2025v1.7999zm-19.706 7.9657c4.8168 0 6.886-3.162 6.886-7.5239v-21.011h-4.2992v20.889c0 1.762-0.43789 3.5227-2.4679 3.5227-2.1502 0-2.5489-2.0417-2.5489-3.4417v-20.97h-4.5384v21.33c0 4.8429 2.5489 7.2023 6.967 7.2023l0.001307 0.002614zm-15.607-0.52024c3.3044 0 6.171-2.4012 6.171-7.963 0-3.2822-1.6326-5.5632-3.8221-6.3239v-0.15947c2.2692-0.96074 3.6626-3.2809 3.6626-6.3631 0-5.2024-2.5489-7.2036-6.4089-7.2036h-7.6846v28.013h8.082zm1.2745-19.049c-0.039214 1.9999-1.3542 2.9214-2.5489 2.9214h-2.3084v-7.8036h2.2287c1.911 0 2.7084 0.92022 2.6679 3.1606l-0.039214 1.7215zm0.2379 11.605c0 2.2417-0.91499 3.4025-2.9058 3.4025h-2.1894v-8.4049h2.0705c1.911 0 3.0247 1.362 3.0247 3.2025v1.7999zm-19.348 7.4441c4.1397 0 6.4494-2.1607 6.4494-6.7226v-14.73c0-4.4429-2.3489-6.5631-6.5696-6.5631h-7.4441v28.013h7.5644v0.002614zm1.8705-6.9226c0 1.7607-0.55684 2.7999-2.7868 2.7999h-2.1097v-19.77h2.1502c2.2287 0 2.7868 1.3202 2.7868 2.8012l-0.039214 14.168-0.001307 0.001307zm-24.166 6.92v-28.012h11.824v4.1619h-7.286v7.2023h5.9318v4.1645h-5.9318v8.3238h7.286v4.1619h-11.824v-0.002614z"
              ></path>
              <path
                data-testid="ds-brandmark"
                fill="#e41321"
                d="m27.621 27.225h-5.3279a0.53462 0.53462 0 0 1-0.53331-0.53592v-13.372c0-0.29541 0.2392-0.53462 0.53331-0.53462h4.9397c3.707 0 4.4848 2.1829 4.4848 4.0129 0 1.0588-0.28103 1.8993-0.83918 2.5162 1.3594 0.56076 2.0914 1.8248 2.0914 3.6534 0 2.6679-1.9999 4.2599-5.3488 4.2599m-7.7356 0h-11.066a0.53331 0.53331 0 0 1-0.532-0.53592v-13.372c0-0.29541 0.2379-0.53462 0.532-0.53462h5.1697c3.2286 0 5.1553 1.7385 5.1553 4.6508 0 1.9372-0.97381 3.4587-2.5437 4.0769l3.6822 4.8246a0.53592 0.53592 0 0 1-0.39868 0.88885m0.019607-27.188c-11.037 0-19.986 8.9486-19.986 19.986 0 11.04 8.9486 19.989 19.987 19.989s19.986-8.9486 19.986-19.987-8.946-19.986-19.985-19.986"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="text-base flex items-center justify-center font-semibold color-[#19124f] mr-4">
          <div className=" p-2 hover:bg-[#F3F3F5] rounded-full cursor-pointer px-4">
            Sell your art
          </div>
          <div className="p-2 hover:bg-[#F3F3F5] rounded-full cursor-pointer px-4">
            Login
          </div>
          <div className="p-2 hover:bg-[#F3F3F5] rounded-full cursor-pointer px-4">
            Signup
          </div>
        </div>
        <div className="w-12 h-12 flex items-center justify-center mr-1">
          <div className="w-6 h-6 p-3 hover:bg-[#F3F3F5] rounded-full cursor-pointer box-content">
            <span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22a1.42 1.42 0 01-.91-.34l-.09-.07-8.87-9.17C.52 10.77 0 9.72 0 8.09a6.17 6.17 0 011-3.37 5.88 5.88 0 012.65-2.25 5.74 5.74 0 013.45-.35 5.9 5.9 0 013 1.68L12 5.72l1.86-1.92a5.9 5.9 0 013-1.68 5.75 5.75 0 013.45.35A5.88 5.88 0 0123 4.72a6.17 6.17 0 011 3.37c0 1.6-.54 2.7-2.15 4.36l-8.94 9.21A1.43 1.43 0 0112 22zM5.93 4a3.65 3.65 0 00-1.49.31 3.91 3.91 0 00-1.77 1.5A4.14 4.14 0 002 8.09c0 1 .24 1.58 1.56 2.93L12 19.74l8.42-8.68C21.77 9.66 22 9 22 8.09a4.2 4.2 0 00-.67-2.29 4 4 0 00-1.77-1.49 3.7 3.7 0 00-2.25-.23 3.8 3.8 0 00-2 1.11L12 8.59l-3.3-3.4a3.8 3.8 0 00-2-1.11A3.92 3.92 0 005.93 4z"></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="w-12 h-12  flex items-center justify-center">
          <div className="w-6 h-6	p-3 hover:bg-[#F3F3F5] rounded-full cursor-pointer box-content ">
            <a
              target="_self"
              href="/cart"
              rel="nofollow"
              title="View Cart"
              data-testid="ds-header-cart-link"
            >
              <span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="7" cy="20" r="2"></circle>
                    <circle cx="17" cy="20" r="2"></circle>
                    <path d="M18 17H6a1 1 0 01-1-.79L2.19 3H1a1 1 0 010-2h2a1 1 0 011 .79L6.81 15h10.37l1.6-8H5a1 1 0 01-1-1c0-.55-.55-1 0-1h16a1 1 0 01.77.37 1 1 0 01.23.83l-2 10a1 1 0 01-1 .8z"></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={
          shouldFixed
            ? shouldFixCategories //! Buraya koy scroll direction
              ? {
                  position: "fixed",
                  top: "92px",
                  overflowY: "hidden",
                  left: "0",
                  zIndex: 10000000000,
                  backgroundColor: "white",
                }
              : { marginTop: "92px" }
            : {}
        }
        className=" w-full h-[54px] max-[1157px]:h-[80px] flex justify-between items-center px-8 search_link_items overflow-auto content-box
       "
      >
        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Clothing
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Clothing",
                "Dresses",
                "Hats",
                "Hoodies & Sweatshirts",
                "Leggings",
                "Skirts",
                "Socks",
                "T-Shirts",
                "Tank Tops",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Stickers
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={["All Stickers", "Magnets"]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Phone Cases
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={["All Phone Cases", "iPhone Cases", "Samsung Galaxy"]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Wall Art
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Wall Art",
                "Art Board Prints",
                "Art Prints",
                "Canvas Prints",
                "Framed Prints",
                "Metal Prints",
                "Mounted Prints",
                "Photographic Prints",
                "Posters",
                "Tapestries",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Home & Living
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Home & Living",
                "Acrylic Blocks",
                "Aprons",
                "Bath Mats",
                "Clocks",
                "Coasters",
                "Comforters",
                "Duvet Covers",
                "Jigsaw Puzzles",
                "Magnets",
                "Mugs",
                "Shower Curtains",
                "Tapestries",
                "Throw Blankets",
                "Throw Pillows",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Kids & Babies
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Kids Clothes",
                "Baby One-Pieces",
                "Baby T-Shirts",
                "Kids Masks",
                "Kids Pullover Hoodies",
                "Kids T-Shirts",
                "Toddler Pullover Hoodies",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Pets
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Pet Supplies",
                "Pet Bandanas",
                "Pet Blankets",
                "Pet Mats",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Accessories
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Accessories",
                "Backpacks",
                "Drawstring Bags",
                "Duffle Bags",
                "Hats",
                "Duffle Bags",
                "Masks",
                "Pins",
                "Scarves",
                "Socks",
                "Tech Accessories",
                "Toiletry Bags",
                "Tote Bags",
                "Water Bottles",
                "Zipper Pouches",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Stationery & Office
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Stationery & Office",
                "Greeting Cards",
                "Hardcover Journals",
                "Mouse Pads & Desk Mats",
                "Postcards",
                "Spiral Notebooks",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Gifts
          <div className="fixed">
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={false}
              arr={[
                "All Gifts",
                "Gift Certificates",
                "Gifts for Friends",
                "Gifts for Her",
                "Gifts for Him",
                "Gifts for Pets",
                "Gifts for Teens",
                "Gifts for Them",
                "Gifts on a Budget",
              ]}
            />
          </div>
        </div>

        <div className="cursor-pointer search_popup_link_item mr-4 shrink-0">
          Explore designs
          <div onClick={()=>alert("dsfdg")} className="fixed" style={{ right: "50px" }}>
            <div className="p-4"></div>
            <HeaderHoverCard
              isLastOne={true}
              arr={[
                "Aesthetics",
                "Animals & Nature",
                "For You",
                "Netflix Fan Art",
                "Official Fan Art",
                "Pop Culture",
              ]}
            />
          </div>
        </div>
      </div>
      {shouldFixed && shouldFixCategories ? (
        <div className="pt-[200px]"></div>
      ) : null}
    </header>
  );
};

export default Header;
