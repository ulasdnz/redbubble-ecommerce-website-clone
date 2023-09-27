"use client";
import React, { useState } from "react";
import Color from "./color";

type Item = {
  name: string;
  code: string;
  src: string;
};

type Props = {
  name: string;
  items: Item[];
  setValue: Function;
  value: Item[];
};

const colorFilterItem: React.FC<Props> = ({ name, items, setValue, value }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const itemsClassNameBase =
    "mt-3 mb-6 flex flex-wrap w-[208px] ml-auto mr-auto ";
  const itemsClassName = isOpen
    ? itemsClassNameBase + "filterItemOpen"
    : itemsClassNameBase + "filterItemCLose";
  const arrowClassName = isOpen
    ? "w-6 h-6 filterCloseArrow"
    : "w-6 h-6 filterOpenArrow";

  return (
    <div className="w-[240px] border-b-[1px] border-solid border-[rgb(214,218,223)]">
      <button
        className="w-[240px] cursor-pointer outline-2 focus:shadow-[inset_0_0_0_4px_#a397e1]
         py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between px-2">
          <div className="text-sm font-semibold leading-6">{name}</div>
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
        {items.map((item, i) => (
          <div
            key={i}
            className="flex mb-3 cursor-pointer"
            onClick={() => {
              let isChecked = false;
              console.log(value);
              value.map((e) => {
                if (e.name === item.name) isChecked = true;
              });
              let colors = [...value]; //!! colors = value OLDUĞUNDA ÇALIŞMIYORDU. RENDER EDİLMİYORDU SEÇİLENLER.
                                       //!! useEFFECT ÇALIŞMIYORDU!! ARRAY destructuring YAPMAN LAZIM!
              if (isChecked) {
                colors = [...colors.filter((e) => e.name !== item.name)]
              } else {
                colors.push(item);
              }
              setValue([...colors]);
            }}
          >
            <Color
              isLast={i === items.length - 1}
              myValue={item}
              selectedItems={value}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default colorFilterItem;
