import { CubeIcon, InboxIcon, LoginIcon, ShoppingCartIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { useDashboard } from "../contexts/DashboardProvider";
import { Actions } from "../types";

export default function Menubar() {
    const { dispatch } = useDashboard()
    return (
        <div className="w-full flex items-center justify-center h-full bg-gray-50 transition-all duration-150 z-50 absolute top-0">
            <div className="w-full h-full relative flex items-center justify-center">
                <button onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} className="w-8 h-8 cursor-default sm:cursor-pointer rounded-full hover:bg-gray-100 flex justify-center items-center absolute top-5 right-5 sm:right-10"><XIcon className="w-6 h-6" /></button>
                <ul className="flex gap-5 flex-col px-5">
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 cursor-default sm:cursor-pointer `} to='/admin/dashboard'><ViewGridIcon className="w-5 h-5" /> Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 cursor-default sm:cursor-pointer `} to='/all/products'><CubeIcon className="w-5 h-5" /> Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 cursor-default sm:cursor-pointer `} to='/cart'><ShoppingCartIcon className="w-5 h-5" />Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 cursor-default sm:cursor-pointer `} to='/orders'><InboxIcon className="w-5 h-5" />Orders</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 cursor-default sm:cursor-pointer `} to='/auth/signin'><LoginIcon className="w-5 h-5" />Signin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
