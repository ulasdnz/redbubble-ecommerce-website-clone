import Image from "next/image";
import Img from "../public/homepage_first.jpg";
import ShopProductRange from "@/components/shop product range";
import FeaturedProducts from "@/components/featured products";
import ExploreDesigns from "@/components/explore designs";
import FeatureArtists from "@/components/featured artists/index";
import ShopFanArt from "@/components/shop fan art/index";
import FeatureBottom from "@/components/features bottom/index";
import Data from "../data/data.json";

export default async function Home() {
  return (
    <main className="relative -z-30">
      <div>
        <div className="relative ">
          <Image
            width={0}
            height={0}
            className="p-4 w-[100%] h-[552px] object-cover	max-sm:p-0"
            src={Img}
            alt="homapage first image"
          />
          <div className="absolute top-0 w-full flex flex-col items-center px-8 py-[80px]">
            <div className="text-[56px] leading-[64px] min-w-[320px] font-semibold max-w-full w-[500px] text-center	mb-6
            max-sm:text-4xl max-sm:leading-[48px] max-sm:mb-4 
            ">
              Treat yourself to something awesome today
            </div>
            <div className="max-w-[480px]  text-2xl text-center font-semibold	leading-8
            max-sm:text-xl max-sm:leading-[30px]
            ">
              Get up to 40% off your new favorite thing with code YOUDESERVEIT.
              Because you totally do.
            </div>
            <div>
              <div
                className="relative bg-white cursor-pointer px-6 py-[10px] rounded-full mt-8 font-semibold text-xl	shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0_5px_10px_0_rgba(0,0,0,0.1),0_1px_12px_0_rgba(0,0,0,0.1)]
              active:border-[3px] active:top-[1px]   active:border-solid active:border-[#AFA3F2]
              "
              >
                Shop Now
              </div>
            </div>
          </div>
        </div>

        <ShopProductRange
          imageCards={Data.home.shopProductRange.imageCards}
          svgCards={Data.home.shopProductRange.svgCards}
        />

        <FeaturedProducts />
        <ExploreDesigns />
        <FeatureArtists />
        <ShopFanArt />
        <FeatureBottom />
      </div>
    </main>
  );
}

// import axios from "axios";

// type Product = {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   price: number;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// };

// type getProducts = {
//   data: Product[];
// };

// async function fetchProducts() {
//   const response = await axios.get<getProducts>(
//     "https://fakestoreapi.com/products"
//   );
//   const products = response.data;

//   return products;
// }

// const res = await fetchProducts();
