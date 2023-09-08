import Image from "next/image";
import Img from "../public/homepage_first.jpg";

export default async function Home() {
  return (
    <main className="p-4 relative -z-30">
      <div>
        <div className="p4 relative text-[#19124f]">
          <Image
            width={0}
            height={0}
            className="w-[100%] h-[552px] object-cover	"
            src={Img}
            alt="homapage first image"
          />
          <div className="absolute top-0 w-full flex flex-col items-center px-8 py-[80px]">
            <div className="text-[56px] leading-[64px] min-w-[320px] font-semibold  w-[500px] text-center	mb-6">
              Treat yourself to something awesome today
            </div>
            <div className="max-w-[480px]  text-[24px] text-center font-semibold	leading-[32px]">
              Get up to 40% off your new favorite thing with code YOUDESERVEIT.
              Because you totally do.
            </div>
            <div>
              <div className="bg-white px-6 py-[10px] rounded-full mt-8 font-semibold text-xl	shadow-[0_3px_4px_-1px_rgba(0,0,0,0.15),0_5px_10px_0_rgba(0,0,0,0.1),0_1px_12px_0_rgba(0,0,0,0.1)]">
                Shop Now
              </div>
            </div>
          </div>
        </div>
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
