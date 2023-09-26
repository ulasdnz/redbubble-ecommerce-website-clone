import React from "react";

type Props = {
  checked: boolean;
};

const circle: React.FC<Props> = ({ checked }) => {
  return (
    <div className="relative ">
      <div
        style={
          checked
            ? {
                backgroundColor: "#07002F",
                border: "0px",
                width: "22px",
                height: "22px",
              }
            : {}
        }
        className="absolute w-5 h-5 top-0 left-0 rounded-full 
                border-2 border-solid border-[rgb(214,218,223)] inputRadio "
      ></div>
    </div>
  );
};

export default circle;
