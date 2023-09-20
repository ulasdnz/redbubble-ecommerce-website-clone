import React from "react";
import Col from "./col";
import Data from "../../data/data.json";
import Logo from "./logo";
import Ios from "../../public/footer/ios.svg";
import Android from "../../public/footer/android.png";
import Image from "next/image";

const index = () => {
  return (
    <footer>
      <div className="w-full bg-[#07002F] text-white  ">
        <div className=" mr-auto ml-auto max-w-[1180px] w-full ">
          <div className="flex max-sm:block max-w-[1180px] w-full py-8 px-6">
            <Col data={Data.home.footer[0]} isSocialMedia={false} />
            <Col data={Data.home.footer[1]} isSocialMedia={false} />
            <Col data={Data.home.footer[2]} isSocialMedia={false} />
            <Col data={Data.home.footer[3]} isSocialMedia={true} />
          </div>
        </div>
        <div className="border-t-2 border-b-2 border-solid border-[rgb(64,53,78)]">
          <div className="max-w-[1180px] w-full py-8 px-6 mr-auto ml-auto">
            <div className="w-[150px] h-auto">{Logo.svg}</div>
            <div className="flex mt-6 text-[rgb(150,149,168)] text-sm">
              <div className="py-1 mr-4">User Agreement </div>
              <div className="py-1 mr-4">Privacy Policy </div>
              <div className="py-1 mr-4">Cookie Policy </div>
            </div>
          </div>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center p-4
        "
        >
          <div className="mr-auto ml-auto max-sm:ml-0">
            <div className="flex p-4 pb-5 max-sm:pl-0">
              <div className="mr-4">
                <Image
                  width={120}
                  height={40}
                  src={Ios}
                  alt="download on the app store ios svg"
                />
              </div>
              <div>
                <Image
                  width={134}
                  height={40}
                  src={Android}
                  alt="download on the app store ios svg"
                />
              </div>
            </div>
            <div className="p-6 pt-12 text-[rgb(150,149,168)] text-[12px] text-center max-sm:pl-0 max-sm:text-start">
              © Redbubble. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
