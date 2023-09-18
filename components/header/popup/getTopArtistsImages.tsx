import img1 from "../../../public/home/header/popup/top artists/img1.jpg"
import img2 from "../../../public/home/header/popup/top artists/img2.jpg"
import img3 from "../../../public/home/header/popup/top artists/img3.jpg"
import img4 from "../../../public/home/header/popup/top artists/img4.jpg"
import img5 from "../../../public/home/header/popup/top artists/img5.jpg"
import img6 from "../../../public/home/header/popup/top artists/img6.jpg"
import { StaticImageData } from "next/image";

const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6];

export default function(){
    return images
}