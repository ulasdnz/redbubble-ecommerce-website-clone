import React from "react";

type Props = {
  title: string;
};

const headline: React.FC<Props> = ({ title }) => {
  return <div className="text-[#19124f] text-2xl font-semibold">{title}</div>;
};

export default headline;
