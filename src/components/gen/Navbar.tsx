import { Link, NavLink } from "react-router-dom";
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { useDashboard } from "../../contexts/DashboardProvider";
import { Actions } from "../../types";

export default function Navbar() {
    const { dispatch } = useDashboard();
    return (
        <div className="w-full bg-white py-5 flex">
            <div className="m-auto w-full sm:grid flex px-5 grid-cols-7 justify-between items-center gap-4 max-w-screen-2xl">
                <div className="flex items-center sm:col-span-1 w-full">
                    <button className="setCursor rounded sm:border p-2" onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} ><MenuIcon className="w-6 h-6" /></button>
                    <button className="text-black sm:hidden block ml-2"><SearchIcon className="w-6 h-6" /></button>
                    <Link to='/' className="sm:block hidden setCursor ml-3 text-gray-800 font-bold text-2xl">Shopee</Link>
                </div>
                <div className="sm:hidden block">
                    <Link to='/' className="setCursor text-gray-800 font-bold text-2xl">Shopee</Link>
                </div>
                <div className="sm:flex hidden sm:col-span-5 w-full h-11 items-center">
                    <input type="text" placeholder="Search product here" className="w-full sm:block hidden border-r-0 px-3 h-full py-2 rounded-l-md outline-none border-gray-100 border" />
                    <button className="bg-green-400 transition-all duration-200 hover:bg-gray-800 flex w-12 text-white h-full items-center justify-center rounded-r-md"><SearchIcon className="w-6 h-6" /></button>
                </div>
                <div className="flex flex-row items-center w-full sm:col-span-1 justify-end gap-3">
                    <NavLink to='/cart' className={(pos) => `${pos.isActive ? "navActive" : ""} flex relative setCursor items-center`}>
                        <ShoppingBagIcon className="sm:w-9 sm:h-9 w-7 h-7" />
                        <span className="rounded-full w-5 h-5 flex items-center justify-center bg-green-500 text-white absolute sm:bottom-0 -bottom-2 sm:right-0 -right-2 text-xs">5</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
