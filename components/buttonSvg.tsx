import React from "react";

const ButtonSvg = () => {
  return (
    <>
      <div className="w-12 h-12 flex items-center justify-center mr-1">
        <div
          className="w-6 h-6 p-3  hover:bg-[#F3F3F5] rounded-full cursor-pointer box-content
        active:border-[3px] active:top-[2px] active:px-[9px] active:border-solid active:border-[#AFA3F2] active:rounded-full
        "
        >
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
        <div
          className="w-6 h-6 p-3 hover:bg-[#F3F3F5] rounded-full cursor-pointer box-content 
        active:border-[3px] active:top-[2px] active:px-[9px] active:border-solid active:border-[#AFA3F2] active:rounded-full
        "
        >
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
    </>
  );
};

export default ButtonSvg;
