import { StaticImageData } from "next/image";
import img1 from "@/public/home/shop fan art/img1.jpg";
import img2 from "@/public/home/shop fan art/img2.jpg";
import img3 from "@/public/home/shop fan art/img3.jpg";
import img4 from "@/public/home/shop fan art/img4.jpg";
import img5 from "@/public/home/shop fan art/img5.jpg";
import img6 from "@/public/home/shop fan art/img6.jpg";
import img7 from "@/public/home/shop fan art/img7.jpg";
import img8 from "@/public/home/shop fan art/img8.jpg";
import img9 from "@/public/home/shop fan art/img9.jpg";
import img10 from "@/public/home/shop fan art/img10.jpg";
import Data from "../../../../data/data.json";

const firstImages: StaticImageData[] = [img1, img2, img3, img4, img5];
const secondImages: StaticImageData[] = [img6, img7, img8, img9, img10];

export default function (bl: boolean) {
  const images = bl ? firstImages : secondImages;
  const datas = bl ? Data.home.shopFanArt.first : Data.home.shopFanArt.second;

  return { images, datas };
}
