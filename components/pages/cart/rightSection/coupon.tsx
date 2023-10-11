"use client";
import React, { useState } from "react";
import Image from "next/image";

const Coupon = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const itemsClassName = isOpen
    ? "filterItemOpen mt-3"
    : "filterItemCLose mt-3";
  const arrowClassName = isOpen
    ? "w-8 h-8 filterCloseArrow"
    : "w-8 h-8 filterOpenArrow";

  return (
    <div className="w-full mb-4 border-b-[1px] border-solid border-[rgb(214,218,223)]">
      <button
        className="w-full cursor-pointer outline-2 py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between px-2">
          <div className="flex leading-6 items-center">
            <Image
              width={26}
              height={26}
              className="mr-2"
              src="https://www.redbubble.com/frontend-static/_next/static/media/coupon.ce55bd75.svg"
              alt="gift coupon svg icon"
            />
            Coupon / Gift Card
          </div>
          <div className={arrowClassName}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 15a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42l3.29 3.3 3.29-3.3a1 1 0 011.42 1.42l-4 4A1 1 0 0112 15z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </button>
      <div className={itemsClassName}>
        <div className="flex flex-col ml-auto mr-auto items-center w-full max-w-[300px]">
          <div className="w-full max-w-[300px]">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full max-w-[300px] -mt-4 mb-5 pl-[19px] py-2 w-[52px] h-[48px] border-2 
                     border-[#D6DADF] outline-[#AFA3F2] border-solid rounded-lg"
            ></input>
          </div>
          <button
            type="button"
            className="w-full max-w-[300px] py-2 text-white font-semibold rounded-full"
            style={
              value == ""
                ? { backgroundColor: "#F2F2F6", color: "#9695A8" }
                : { backgroundColor: "rgb(255, 89, 111)" }
            }
          >
            Apply
          </button>
        </div>
        <div className="mt-8">
          <div className="mb-4 font-semibold">Member Offers</div>
          <div className="flex justify-between px-4 py-6 text-sm font-semibold shadow-[0_1px_1px_-1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.1)]">
            <div>Get 20% off your first order</div>
            <div
              className="w-[74px] h-8 flex items-center justify-center
            text-white rounded-full bg-[rgb(255,89,111)]"
            >
              Sign Up
            </div>
          </div>
          <div className="mt-4 mb-1">
            <span className="font-semibold text-[rgb(255,89,111)]">Log in</span>
            <span>
              &nbsp; to see if you have any member offers waiting for you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
