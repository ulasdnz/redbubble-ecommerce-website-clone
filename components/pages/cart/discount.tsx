import React from 'react'
import Image from "next/image";

const discount = () => {
  return (
    <div className="flex mt-6 mb-4 p-4 bg-[#E7F8EF]">
    <Image
      width={22}
      height={24}
      src="https://www.redbubble.com/frontend-static/_next/static/media/success.ac4c80fe.svg"
      alt="succes icon svg"
    />
    <div className="ml-4 text-[#rgb(11,83,47)]">
      All eligible products have been discounted by at least 20%.
    </div>
  </div>
  )
}

export default discount