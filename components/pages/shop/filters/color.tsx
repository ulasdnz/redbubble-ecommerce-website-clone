"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Item = {
  name: string;
  code: string;
  src: string;
};

type Props = {
  selectedItems: Item[];
  myValue: Item;
  isLast: boolean;
};

const color: React.FC<Props> = ({ selectedItems, myValue, isLast }) => {
  
  let isChecked = false

    selectedItems.map((item) => {
      if (item.name == myValue.name) isChecked = true
    });

  return (
    <div
      title={myValue.name}
      className="relative w-8 h-8 rounded-full mr-3"
      style={{
        backgroundColor: myValue.code,
        border:
          myValue.name == "White"
            ? "2px solid rgb(182, 182, 182)"
            : isLast
            ? "2px solid #D6DADF"
            : "2px solid " + myValue.code,
      }}
    >
      {isChecked ? (
        <div
          className="absolute w-full h-full bg-transparent top-0 left-0 rounded-full"
          style={{
            backgroundColor: myValue.code,
            color:
              myValue.name == "White"
                ? "#19124F"
                : isLast
                ? "#19124F"
                : "white",
            border:
              myValue.name == "White"
                ? "2px solid #19124F"
                : isLast
                ? "2px solid #19124F"
                : "2px solid white",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 24 24">
            <path
              d="M7.207 12.793a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414L9.5 15.086l-2.293-2.293z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      ) : null}
      {isLast ? (
        <Image
          width={32}
          height={32}
          alt="color image"
          src={myValue.src}
          className="rounded-full"
        />
      ) : null}
    </div>
  );
};

export default color;
