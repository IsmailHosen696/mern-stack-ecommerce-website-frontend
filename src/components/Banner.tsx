import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

export const bannerData = [
    {
        src: "https://alaneesqatar.qa/wp-content/uploads/2021/09/iphone13bannertwo.jpg"
    },
    {
        src: "https://www.xda-developers.com/files/2020/10/Microsoft-Surface-Laptop-Go-launch-featured-23589714-810x298_c.jpg"
    },
    {
        src: "https://rudraitstore.com/wp-content/uploads/2021/10/banner-3-5.jpg"
    },
]
export default function Banner() {
    const [count, setCount] = useState<number>(0)
    const handleNextBanner = () => count >= bannerData.length - 1 ? setCount(0) : setCount(prevCount => prevCount + 1)
    const handlePreviousBanner = () => count <= 0 ? setCount(bannerData.length - 1) : setCount(prevCount => prevCount - 1)
    return (
        <div className="w-full flex items-center shadow justify-center overflow-hidden h-full relative" style={{ maxHeight: "60vh" }}>
            <button onClick={handlePreviousBanner} style={{ top: "50%" }} className="absolute w-7 h-7 bg-gray-100 text-gray-500 flex justify-center items-center rounded z-30 setCursor left-5"><ArrowSmLeftIcon className="w-5 h-5" /></button>
            <img src={bannerData[count].src} alt="banner_image" className="banner-img" />
            <button onClick={handleNextBanner} style={{ top: "50%" }} className="absolute z-30 w-7 h-7 bg-gray-100 text-gray-500 flex justify-center items-center rounded setCursor right-5"><ArrowSmRightIcon className="w-5 h-5" /></button>
        </div>
    )
}
