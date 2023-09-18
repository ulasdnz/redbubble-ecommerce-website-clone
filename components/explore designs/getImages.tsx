import img1 from "../../public/home/explore designs/image_1.jpg";
import img2 from "../../public/home/explore designs/image_2.jpg";
import img3 from "../../public/home/explore designs/image_3.jpg";
import img4 from "../../public/home/explore designs/image_4.jpg";
import img5 from "../../public/home/explore designs/image_5.jpg";
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [img1, img2, img3, img4, img5];

export default function() {
    return images
}