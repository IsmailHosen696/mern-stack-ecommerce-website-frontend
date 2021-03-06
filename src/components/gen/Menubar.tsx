import { XIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";

import { useDashboard } from "../../contexts/DashboardProvider";
import useClick from "../../hooks/useClick";
import { Actions } from "../../types";
import Categories from "./Categories";

export default function Menubar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const { dispatch } = useDashboard();
    const { isInsideClick } = useClick(menuRef);

    useEffect(() => {
        if (!isInsideClick) {
            dispatch({ type: Actions.TOOGLE_MENUBAR });
        }
        return
    }, [isInsideClick, dispatch]);


    return (
        <div className="w-full flex fixed h-full overflow-hidden bg-black bg-opacity-30 transition-all duration-150 z-50 top-0">
            <div ref={menuRef} className="sm:w-80 w-full relative h-full bg-white flex">
                <button onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} className="w-8 h-8 setCursor rounded-full flex justify-center items-center absolute top-5 hover:text-green-400 right-5"><XIcon className="w-6 h-6" /></button>
                <div className="flex p-5 flex-col gap-5 w-full">
                    <h1 className="font-medium text-lg px-2">All categories</h1>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
