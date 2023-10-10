import React from "react";
import Image from "next/image";
import AddToCardIcon from "../addToCardIcon";
import getProducts from "@/hooks/getProducts";

type Props = {
  src: string;
  title: string;
  artistName: string;
  productNumber: number;
};

const addToCard = ({ src, title, artistName, productNumber: price }: Props) => {
  const numberOfItems = window.localStorage.getItem("totalItemNumber");

  if (numberOfItems === undefined || numberOfItems === null) {
    window.localStorage.setItem("totalItemNumber", "1");
    window.localStorage.setItem("count1", "1");
    window.localStorage.setItem("src1", src);
    window.localStorage.setItem("title1", title);
    window.localStorage.setItem("artist1", artistName);
    window.localStorage.setItem("price1", price.toString());
  } else {
    const currentProductNumber = parseInt(numberOfItems);
    const products = getProducts();
    const updateNumberOfItems = currentProductNumber + 1;

    let includes = false;
    let index = -1;
    let newCount = -1;
    products.map((product: any, i: number) => {
      if (product.src === src) {
        includes = true;
        index = i + 1;
        newCount = product.count + 1;
      }
    });

    if (!includes) {
      window.localStorage.setItem("count" + updateNumberOfItems, "1");
      window.localStorage.setItem("src" + updateNumberOfItems, src);
      window.localStorage.setItem("title" + updateNumberOfItems, title);
      window.localStorage.setItem("artist" + updateNumberOfItems, artistName);
      window.localStorage.setItem(
        "price" + updateNumberOfItems,
        price.toString()
      );
      window.localStorage.setItem(
        "totalItemNumber",
        updateNumberOfItems.toString()
      );
    } else {
      window.localStorage.setItem("count" + index, newCount.toString());
    }
  }

  window.dispatchEvent(new Event("storage")); //!! event listener anca böyle fire ediyor çünkü "storage" event'i sadece
  //!! başka tablerde local storage değişirse fire oluyordu. Bu fonksiyonla artık mecbur aynı tab'de de fire edecek.
};

const exploreDesignCard: React.FC<Props> = ({
  src,
  title,
  artistName,
  productNumber,
}) => {
  return (
    <div className="relative w-[233px] mr-1 mt-4 rounded cursor-pointer shrink-0 ">
      <div className="w-[233px] h-[233px] overflow-hidden">
        <Image
          width={233}
          height={233}
          alt="Featured Product item image"
          className="w-[233px] h-[233px] object-cover rounded hover:scale-150 transition-transform duration-[0.25s] ease-[ease-in-out]"
          src={src}
        />
      </div>
      <div className="py-3 ">
        <span className="block leading-6 font-semibold text-sm overflow-hidden	whitespace-nowrap text-ellipsis	">
          {title}
        </span>
        <span className="block leading-6 overflow-hidden	whitespace-nowrap text-ellipsis	">
          {artistName}
        </span>
        <span className="block font-semibold mt-3 leading-6 overflow-hidden	whitespace-nowrap text-ellipsis	">
          From ${productNumber}
        </span>
      </div>
      <div onClick={() => addToCard({ src, title, artistName, productNumber })}>
        <AddToCardIcon />
      </div>
    </div>
  );
};

export default exploreDesignCard;
