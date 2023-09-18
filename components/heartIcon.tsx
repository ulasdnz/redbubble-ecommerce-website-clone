import React from "react";
import Image from "next/image";

const heartIcon = () => {
  return (
    <div>
      <div className="absolute top-2 right-2  bg-white flex items-center justify-center w-8 h-8 rounded-full shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0_5px_10px_0_rgba(0,0,0,0.1),0_1px_12px_0_rgba(0,0,0,0.1)]">
        <span>
          <Image
            width={16}
            height={16}
            src="https://www.redbubble.com/explore/client/fe5b59d42e7d54796992f8f9914d3e45.svg"
            alt="Favorite"
            className="w-4 h-4"
          ></Image>
        </span>
      </div>
    </div>
  );
};

export default heartIcon;
