import { StaticImageData } from "next/image";
import svg1 from "../../public/home/gray section/svg1.svg";
import svg2 from "../../public/home/gray section/svg2.svg";
import svg3 from "../../public/home/gray section/svg3.svg";
import svg4 from "../../public/home/gray section/svg4.svg";

type CardInfo = {
    svg: StaticImageData;
    title: string;
    description: string;
}

const svgs: CardInfo[] = [
    {
      svg: svg1,
      title: "Worldwide Shipping",
      description: "Available as Standard or Express delivery",
    },
    {
      svg: svg2,
      title: "Secure Payments",
      description: "100% Secure payment with 256-bit SSL Encryption",
    },
    {
      svg: svg3,
      title: "Free Return",
      description: "Exchange or money back guarantee for all orders",
    },
    {
      svg: svg4,
      title: "Local Support",
      description: "24/7 Dedicated support",
    },
  ]

export default function ():CardInfo[] {
  return svgs
}
