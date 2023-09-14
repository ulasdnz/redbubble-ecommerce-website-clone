import React from "react";
import HeaderHoverCard from "./headerHoverCard";

type Props = {
  isLastOne: boolean;
  elements: string[];
  title: string;
  shouldFixCategories: boolean;
};

const categoryLink: React.FC<Props> = ({
  isLastOne,
  elements,
  title,
  shouldFixCategories,
}) => {
  return (
    <div
      className="cursor-pointer search_popup_link_item mr-4 shrink-0"
      style={!shouldFixCategories ? { zIndex: "-1" } : {}}
    >
      {title}
      <div className={shouldFixCategories ? "fixed" : "relative"}>
        <div className="p-4"></div>
        <HeaderHoverCard isLastOne={isLastOne} arr={elements} />
      </div>
    </div>
  );
};

export default categoryLink;
