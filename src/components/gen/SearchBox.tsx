import { ArrowLeftIcon, SearchIcon } from "@heroicons/react/outline";
import { useDashboard } from "../../contexts/DashboardProvider";
import { Actions } from "../../types";

export default function SearchBox() {
    const { dispatch } = useDashboard();

    return (
        <div className="absolute top-0 left-0 w-full transition-all duration-200 h-full bg-white z-50 p-5" style={{ transitionProperty: "left" }}>
            <div className="flex items-center w-full gap-3">
                <button onClick={() => dispatch({ type: Actions.TOOGLE_SEARCHBAR, value: false })} className="cursor-default"><ArrowLeftIcon className="w-6 h-6" /></button>
                <input type="text" placeholder="Search here" className="outline-none w-full border-gray-200 border px-5 py-2 rounded" />
                <button className="cursor-default"><SearchIcon className="w-6 h-6" /></button>
            </div>
        </div>
    )
}
