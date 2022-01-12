import {

    XIcon
} from "@heroicons/react/outline";

import { NavLink } from "react-router-dom";
import { useDashboard } from "../../contexts/DashboardProvider";
import { Actions } from "../../types";

export default function Menubar() {
    const { dispatch, state: { user } } = useDashboard();
    return (
        <div className="w-full flex fixed h-full overflow-hidden bg-black bg-opacity-10 transition-all duration-150 z-50 top-0">
            <div className="sm:w-80 w-full relative h-full bg-white flex">
                <button onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} className="w-8 h-8 setCursor rounded-full flex justify-center items-center absolute top-5 hover:text-green-400 right-5"><XIcon className="w-6 h-6" /></button>
                <ul className="flex w-full items-start sm:items-end gap-5 flex-col px-5 mt-20">

                </ul>
            </div>
        </div>
    )
}
