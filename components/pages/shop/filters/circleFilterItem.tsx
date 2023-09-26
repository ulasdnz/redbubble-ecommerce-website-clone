"use client";
import React, { useState } from "react";
import Circle from "./circle";
import Rectangle from "./rectangle";

type Props = {
  name: string;
  items: Array<string>;
};

const circleFilterItem: React.FC<Props> = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); //!! Change this to true
  const [value, setValue] = useState(items[0]);

  const itemsClassName = isOpen
    ? "filterItemOpen mt-3"
    : "filterItemCLose mt-3";
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
        {isOpen ? null : (
          <div className="text-sm leading-6 text-start px-2">{value}</div>
        )}
      </button>
      <div className={itemsClassName}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex mb-5 cursor-pointer"
            onClick={() => setValue(item)}
          >
            <Circle checked={value === item} />
            <div className="ml-8">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default circleFilterItem;
