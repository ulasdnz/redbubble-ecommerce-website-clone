import { StaticImageData } from "next/image"
import svg1 from "../../public/home/Shop Product Range/svg1.svg"
import svg2 from "../../public/home/Shop Product Range/svg2.svg"
import svg3 from "../../public/home/Shop Product Range/svg3.svg"

const images: StaticImageData[] = [svg1, svg2, svg3]

export default function() {
    return images
}