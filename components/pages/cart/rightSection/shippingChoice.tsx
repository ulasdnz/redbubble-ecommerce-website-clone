import React, { MouseEventHandler } from "react";
import Circle from "../../shop/filters/circle";

type Props = {
  isSelected: boolean;
  title: string;
  arrivalDate: string;
  extraCost: number | null;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

const shippingChoice: React.FC<Props> = ({
  isSelected,
  title,
  arrivalDate,
  extraCost,
  handleClick,
}) => {
  const classBase = "flex py-3 px-4 mb-4 border-2 border-solid rounded text-sm";
  const className = isSelected
    ? classBase + ""
    : classBase + " cursor-pointer hover:bg-[#F2F2F6]";

  return (
    <div
      onClick={handleClick}
      className={className}
      style={
        isSelected ? { borderColor: "#19124F" } : { borderColor: "#D6DADF" }
      }
    >
      <div className="mt-3">
        <Circle checked={isSelected} />
      </div>
      <div className="ml-10">
        <div className="font-semibold mb-2">{title}</div>
        <div>{arrivalDate}</div>
      </div>
      {extraCost ? <div className="ml-7 font-bold">+ ${extraCost}</div> : null}
    </div>
  );
};

export default shippingChoice;
