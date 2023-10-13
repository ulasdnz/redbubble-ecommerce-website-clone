import img1 from "@/public/home/featured artists/image_1.jpg";
import img2 from "@/public/home/featured artists/image_2.jpg";
import i2 from "@/public/home/featured artists/img2.jpg";
import is2 from "@/public/home/featured artists/img_sm_2.jpg";
import img3 from "@/public/home/featured artists/image_3.jpg";
import img4 from "@/public/home/featured artists/image_4.jpg";
import img5 from "@/public/home/featured artists/image_5.jpg";
import img6 from "@/public/home/featured artists/image_6.jpg";
import img7 from "@/public/home/featured artists/image_7.jpg";
import img8 from "@/public/home/featured artists/image_8.jpg";
import img9 from "@/public/home/featured artists/image_9.jpg";
import img10 from "@/public/home/featured artists/image_10.jpg";
import imgsm_1 from "@/public/home/featured artists/image_sm_1.jpg";
import imgsm_2 from "@/public/home/featured artists/image_sm_2.jpg";
import imgsm_3 from "@/public/home/featured artists/image_sm_3.jpg";
import imgsm_4 from "@/public/home/featured artists/image_sm_4.jpg";
import imgsm_5 from "@/public/home/featured artists/image_sm_5.jpg";
import imgsm_6 from "@/public/home/featured artists/image_sm_6.jpg";
import imgsm_7 from "@/public/home/featured artists/image_sm_7.jpg";
import imgsm_8 from "@/public/home/featured artists/image_sm_8.jpg";
import imgsm_9 from "@/public/home/featured artists/image_sm_9.jpg";
import imgsm_10 from "@/public/home/featured artists/image_sm_10.jpg";
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [
  img1,
  i2,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];
const avatars: StaticImageData[] = [
  imgsm_1,
  is2,
  imgsm_2,
  imgsm_3,
  imgsm_4,
  imgsm_5,
  imgsm_6,
  imgsm_7,
  imgsm_8,
  imgsm_9,
  imgsm_10,
];

export const getImages = () => {
  return images;
};
export const getAvatars = () => {
  return avatars;
};
