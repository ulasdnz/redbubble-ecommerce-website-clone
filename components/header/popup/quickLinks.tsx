import React from "react";
import PopupCardSm from "../popupCard_sm";
import img1 from "../../../public/home/header/popup/quick links/img1.jpg"
import img2 from "../../../public/home/header/popup/quick links/img2.jpg"
import img3 from "../../../public/home/header/popup/quick links/img3.jpg"
import {StaticImageData} from "next/image"

const images: StaticImageData[] = [img1, img2, img3]

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
        {quickLinks.map((item, i) => (
          <PopupCardSm
            title={item.title}
            image={images[i]}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default quickLinks;
