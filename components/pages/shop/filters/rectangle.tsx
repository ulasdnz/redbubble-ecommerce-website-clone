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
        className="absolute w-5 h-5 top-0 left-0 rounded 
                border-2 border-solid border-[rgb(214,218,223)] "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 24 24">
          <path
            d="M7.207 12.793a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414L9.5 15.086l-2.293-2.293z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default circle;
