import React from "react";

const trendingSearches = () => {
  return (
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
  );
};

export default trendingSearches;
