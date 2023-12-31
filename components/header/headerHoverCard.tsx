import React from "react";

type Props = {
  arr: string[];
  isLastOne: boolean;
};

const HeaderHoverCard: React.FC<Props> = ({ arr, isLastOne }) => {
  return (
    <div
      style={{ right: isLastOne ? "75px" : "" }}
      className="w-auto relative h-auto py-2 z-100 bg-white search_popup_hover_card rounded-md min-w-[208px]"
    >
      <div className="relative">
        <span
          className="header_hover_card_arrow"
          style={{
            left: isLastOne ? "auto" : "",
            right: isLastOne ? "50px" : "",
          }}
        ></span>

        <div className="search_popup_hover_card_items">
          {arr.map((e, i) => (
            <div key={i} className="py-2 px-6 hover:bg-[#F2F2F6]">
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderHoverCard;
