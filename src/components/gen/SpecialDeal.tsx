import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { itemType } from "../../types";

export const specialDeal: itemType[] = [
    {
        id: "00",
        name: "Peanut sdfd safd",
        price: 4,
        img: "https://www.india.com/wp-content/uploads/2020/12/PEpeanuts.jpg",
        tags: ["sale"],
        avilableOnStock: 3,
        inStock: true,
        category: "fruit",
        type: "New Arrival"
    },
    {
        id: "01",
        name: "Mango",
        price: 10,
        img: "https://img.jamieoliver.com/home/wp-content/uploads/2020/03/Mango_630x420.jpg",
        avilableOnStock: 2,
        inStock: true,
        category: "fruit",
        type: "New Arrival"
    },
    {
        id: "02",
        name: "Litchi",
        price: 8,
        img: "https://asapland.com/wp-content/uploads/2021/10/f-litchi-fruit-1-1280x720.jpg",
        avilableOnStock: 0,
        inStock: false,
        category: "fruit",
        type: "Fresh"
    },
    {
        id: "03",
        name: "Pomegranate",
        price: 17,
        img: "https://images.healthshots.com/healthshots/en/uploads/2021/09/27184641/pomegranate.jpg",
        avilableOnStock: 10,
        inStock: true,
        category: "fruit",
        type: "New Arrival"
    },
    {
        id: "04",
        name: "Litchi",
        price: 8,
        img: "https://asapland.com/wp-content/uploads/2021/10/f-litchi-fruit-1-1280x720.jpg",
        avilableOnStock: 0,
        inStock: false,
        category: "fruit",
        type: "Fresh"
    },
    {
        id: "03",
        name: "Pomegranate",
        price: 17,
        img: "https://images.healthshots.com/healthshots/en/uploads/2021/09/27184641/pomegranate.jpg",
        avilableOnStock: 10,
        inStock: true,
        category: "fruit",
        type: "New Arrival"
    },
    {
        id: "04",
        name: "Litchi",
        price: 8,
        img: "https://asapland.com/wp-content/uploads/2021/10/f-litchi-fruit-1-1280x720.jpg",
        avilableOnStock: 0,
        inStock: false,
        category: "fruit",
        type: "Fresh"
    },
]

export default function SpecialDeal() {
    const [totalTime, setTotalTime] = useState<number>(5000)
    const [time, setTime] = useState<{ hours: number, minutes: number, secound: number }>({ hours: 0, minutes: 0, secound: 0 });

    useEffect(() => {
        setInterval(() => {
            setTotalTime(prevtime => prevtime - 1);
        }, 1000)
    }, [])

    useEffect(() => {
        setTime({ secound: Math.floor(totalTime % 60), minutes: Math.floor((totalTime / 60) % 60), hours: Math.floor((totalTime / 60 / 60) % 24) })
        return () => setTime({ hours: 0, minutes: 0, secound: 0 });
    }, [totalTime]);

    return (
        <div className="flex w-full items-center gap-2 flex-col mb-5">
            <div className="w-full flex items-center mt-5">
                <h1 className="text-2xl font-medium">Deals Of the Day</h1>
                <h1 className="text-white bg-green-500 px-2 py-1 ml-5 rounded flex items-center">
                    <span>{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
                    <span className="px-1">:</span>
                    <span>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
                    <span className="px-1">:</span>
                    <span>{time.secound < 10 ? `0${time.secound}` : time.secound}</span>
                </h1>
            </div>
            <div className="border rounded max-w-screen-2xl flex gap-2 overflow-x-scroll w-full">
                {
                    specialDeal.map((item, i) =>
                        <div style={{ minWidth: "18rem" }} key={i} className="relative group flex p-2 flex-col border-r">
                            <div className="flex w-full h-72 overflow-hidden">
                                <img src={item.img} className="object-cover transition-all duration-200 cursor-pointer transform group-hover:scale-105 rounded" alt="" />
                            </div>
                            <div className="flex absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                <button className="w-10 bg-white h-10 rounded-full border flex items-center justify-center">
                                    <ShoppingBagIcon className="w-5 h-5 hover:text-green-400 text-gray-500" />
                                </button>
                            </div>
                            <div className="flex">
                                <Link to={`/product/${item.name.split(" ").join("-").toLocaleLowerCase()}`} className="capitalize">{item.name}</Link>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
