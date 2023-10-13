import React from "react";
import Svg from "../../public/footer/socialMediaSvgs.js";

type Props = {
  isSocialMedia: boolean;
  data: {
    title: string;
    items: string[];
  };
};

const col: React.FC<Props> = ({ data, isSocialMedia }) => {
  return (
    <div className="pr-8 w-full max-sm:mb-4">
      <div className="font-semibold py-1  leading-7">{data.title}</div>
      {data.items.map((item, i) => (
        <div key={i} className="py-1 leading-7 flex">
          {isSocialMedia ? (
            <span className="h-6 w-6 mr-3">{Svg[i]}</span>
          ) : null}
          {item}
        </div>
      ))}
    </div>
  );
};

export default col;
