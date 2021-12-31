import Banner from "../../components/Banner";
import Categories from "../../components/Categories";

export default function Home() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center sm:px-5 max-w-screen-2xl">
                <Banner />
                <div className="py-5 w-full flex flex-col items-center">
                    <h1 className="text-2xl font-medium py-5 ">Categories</h1>
                    <Categories />
                </div>
                <div className="flex items-center flex-col">
                    <h1 className="text-2xl font-medium py-5 ">Featured Products</h1>
                </div>
            </div>
        </div>
    )
}
