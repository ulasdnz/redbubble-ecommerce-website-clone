import React from "react";

type Props = {
  title: string;
};

const Button: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="relative p-2 hover:bg-[#F3F3F5] rounded-full cursor-pointer px-4
    active:border-[3px] active:top-[2px] active:px-[13px] active:border-solid active:border-[#AFA3F2]
    "
    >
      {title}
    </div>
  );
};

export default Button;
