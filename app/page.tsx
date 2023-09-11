import Image from "next/image";
import Img from "../public/homepage_first.jpg";
import HomeRangeCard from "@/components/HomeRangeCard";

export default async function Home() {
  return (
    <main className="relative -z-30 pb-[1324px]">
      <div className="text-[#19124f]">
        <div className="relative ">
          <Image
            width={0}
            height={0}
            className="p-4 w-[100%] h-[552px] object-cover	"
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

        <div className="flex justify-center">
          <div className="px-4 pt-4 w-full max-w-[1180px]">
            <div>
              <div className="text-2xl font-semibold asd">
                Shop Product Range
              </div>
              <div className="p-3"></div>
              <div className="homeRangeCardWrapper">
                <HomeRangeCard
                  buttonTitle="Student Discounts"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/4LZRApgwbf1M7k2LmuiVm5/3e27df779159b2396fa8608985e80870/23Q306_GM_B2S_Peak_StudentDiscount_DesktopTile__1_.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop T-Shirts"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/3ZA4uukTXzxQIcXeir1msx/5b4d098599e07d337d50c91f5dcc55da/HomepageTile_Desktop_2023_T-Shirts.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Deals"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/22T2CP8HoMT95v7sAAOSx4/81fc0b953a7431b8f5820bf04bb30cf6/HomepageTile_Desktop_2023_Deals.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <div className="flex p-4 box-content col-[span_2] row-start-2">
                  <div className="mr-8 w-[50px]">
                    <Image
                      width={32}
                      height={40}
                      alt="svg icon"
                      className="w-8 h-10"
                      src="https://www.redbubble.com/explore/client/68129deeec381d27c0d6e8f8da6a574d.svg"
                    />
                  </div>
                  <div className="w-full">
                    <div className="leading-[26px] font-semibold">
                      Weirdly meaningful art
                    </div>
                    <div>
                      Millions of designs on over 70 high quality products.
                    </div>
                  </div>
                </div>
                <div className="flex p-4 box-content col-[span_2] row-start-2">
                  <div className="mr-8 w-[50px]">
                    <Image
                      width={32}
                      height={40}
                      alt="svg icon"
                      className="w-8 h-10"
                      src="https://www.redbubble.com/explore/client/b9ece6b82b94d96961142b8b0c2071e7.svg"
                    />
                  </div>
                  <div className="w-full">
                    <div className="leading-[26px] font-semibold">
                      Purchases pay artists
                    </div>
                    <div>
                      Money goes directly into a creative person's pocket.
                    </div>
                  </div>
                </div>
                <div className="flex p-4 box-content col-[span_2] row-start-2">
                  <div className="mr-8 w-[50px]">
                    <Image
                      width={32}
                      height={40}
                      alt="svg icon"
                      className="w-8 h-10"
                      src="https://www.redbubble.com/explore/client/a2d6efe99675cfe8ee95482c330c7b3a.svg"
                    />
                  </div>
                  <div className="w-full">
                    <div className="leading-[26px] font-semibold">
                      Socially responsible production
                    </div>
                    <div>
                      We're investing in programs to offset all carbon
                      emissions.
                    </div>
                  </div>
                </div>
                <HomeRangeCard
                  buttonTitle="Shop Assassin's Creed Mirage"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/7pyyvBmcf1XYqxhGAG6IL2/b0d4ec5827d63f92b438e4ce5642d308/Homepage_Tile_ACM_Desktop.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Pillows"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/5OR80Tn6F1qysRYrIl5RQi/daac7caa1494e9189ede85c7de7e5576/HomepageTile_Desktop_2023_Pillows.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Sweatshirts"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/1Mi2b8sgJTF5dFNFQjZkYa/4abcf2c5e26f926337999d18aed026a4/HomepageTile_Desktop_2023_Sweatshirts.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Stickers"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/3fdsCcy064MrFz3VfQrb1n/fc1c86aa2d19f388e31733cb1e46acbd/HomepageTile_Desktop_2023_Stickers.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Phone Cases"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/6uTG8v7XNXEVnyCchZ6jzZ/afe090437c63f7b49906fba58013017b/HomepageTile_Desktop_2023_Phonecases.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Posters"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/1SszEPreotNP8LJ5B9edzr/a720663f43ce0646fa97f2e02f67868a/HomepageTile_Posters_Desktop_2022.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Pets"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/62skHLnfMOv9j7GVCzSlsy/ffe3af243703deee4c0a2a29c31a7cac/HomepageTile_Desktop_2023_Pets.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Hats"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/3JcHLvBFAaxhnygJ8F9zrJ/b1a5994e6292027e00c8ca7f1b3ad923/HomepageTile_Desktop_2023_Hats.png?fm=jpg&q=85&w=800&fl=progressive"
                />
                <HomeRangeCard
                  buttonTitle="Shop Wall Art"
                  src="https://images.ctfassets.net/5hig0ukq7ib0/nwQrr1CxEGNykZ4Yg0Id8/35148ccdfa702803b09a1582f772635e/HomepageTile_Desktop_2023_WallArt.png?fm=jpg&q=85&w=800&fl=progressive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="pt-8 px-4 w-full max-w-[1180px]">
              <div className="text-2xl w-full font-semibold">Featured products</div>
              <div> 
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
