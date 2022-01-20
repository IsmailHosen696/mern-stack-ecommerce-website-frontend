import { useEffect, useState } from "react";
import Banner from "../../components/gen/Banner";
import Categories from "../../components/gen/Categories";

export default function Home() {
    const [totalTime, setTotalTime] = useState<number>(86400)
    const [time, setTime] = useState<{ hours: number, minutes: number, secound: number }>({ hours: 0, minutes: 0, secound: 0 });


    useEffect(() => {
        setInterval(() => {
            setTotalTime(prevtime => prevtime - 1);
        }, 1000)
    }, [])

    useEffect(() => {
        setTime({ secound: Math.floor(totalTime % 60), minutes: Math.floor((totalTime / 60) % 60), hours: Math.floor((totalTime / 60 / 60) % 24) })
        return () => setTime({ hours: 0, minutes: 0, secound: 0 });
    }, [totalTime])
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center max-w-screen-2xl">
                <Banner />
                <div className="py-5 w-full flex flex-col items-center">
                    <h1 className="text-2xl font-medium py-5 ">Categories</h1>
                    <Categories />
                </div>
                <div className="flex w-full flex-col sm:px-0 px-5">
                    <div className="flex w-full items-center">
                        <h1 className="text-2xl font-medium py-5 ">Deals Of the Day</h1>
                        <h1 className="text-white bg-red-500 px-2 py-1 ml-5 rounded flex items-center">
                            <span>{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
                            <span className="px-1">:</span>
                            <span>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
                            <span className="px-1">:</span>
                            <span>{time.secound < 10 ? `0${time.secound}` : time.secound}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
