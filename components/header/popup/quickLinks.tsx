import React from "react";
import PopupCardSm from "../popupCard_sm";

type QuickLink = {
  title: string;
  image: string;
  backgroundColor: string;
};

type Props = {
  quickLinks: QuickLink[];
};

const quickLinks: React.FC<Props> = ({ quickLinks }) => {
  return (
    <div>
      <div className="text-[14px] font-semibold mb-3 mt-7">Quick links</div>
      <div className="grid grid-cols-3 gap-4">
        {quickLinks.map((item) => (
          <PopupCardSm
            title={item.title}
            image={item.image}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default quickLinks;
