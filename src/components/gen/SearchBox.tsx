import { ArrowLeftIcon, SearchIcon } from "@heroicons/react/outline";

export default function SearchBox() {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-50 p-5">
            <div className="flex items-center w-full gap-3">
                <button><ArrowLeftIcon className="w-6 h-6" /></button>
                <input type="text" placeholder="Search here" className="outline-none w-full border-gray-200 border px-5 py-2 rounded" />
                <button><SearchIcon className="w-6 h-6" /></button>
            </div>
        </div>
    )
}
