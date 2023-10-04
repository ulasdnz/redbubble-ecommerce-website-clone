import React from "react";

const heartIcon = () => {
  return (
    <div>
      <div className="absolute top-2 right-2 p-[6px]  bg-white flex items-center justify-center w-8 h-8 rounded-full shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0_5px_10px_0_rgba(0,0,0,0.1),0_1px_12px_0_rgba(0,0,0,0.1)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="8" cy="20" r="2"></circle>
          <circle cx="18" cy="20" r="2"></circle>
          <path d="M19 17H7a1 1 0 01-1-.78L3.2 4H2a1 1 0 010-2h2a1 1 0 011 .78L7.8 15h10.4L20 6.78a1 1 0 012 .44l-2 9a1 1 0 01-1 .78z"></path>
          <path d="M16 6h-2V4a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0V8h2a1 1 0 000-2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default heartIcon;
