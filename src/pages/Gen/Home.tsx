import Banner from "../../components/gen/Banner";
import SpecialDeal from "../../components/gen/SpecialDeal";

export default function Home() {


    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center max-w-screen-2xl">
                <div className="w-full relative flex flex-col">
                    <div className="w-full">
                        <Banner />
                    </div>
                </div>
                <div className="flex w-full px-5">
                    <SpecialDeal />
                </div>
            </div>
        </div>
    )
}
