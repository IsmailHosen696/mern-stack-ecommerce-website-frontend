import { Link, NavLink } from "react-router-dom";
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/outline'
import { useDashboard } from "../../contexts/DashboardProvider";
import { Actions } from "../../types";

export default function Navbar() {
    const { dispatch, state: { isSearchBarOpen } } = useDashboard();
    return (
        <div className="w-full bg-white py-5 flex md:static border-b md:border-transparent border-gray-200 sticky md:z-auto z-40 top-0">
            <div className="m-auto w-full flex px-5 md:grid grid-cols-5 justify-between items-center gap-4 max-w-screen-2xl">
                <div className="flex items-center col-span-1 w-full">
                    <button className="setCursor rounded md:border md:p-2" onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} ><MenuIcon className="w-6 h-6" /></button>
                    <button onClick={() => dispatch({ type: Actions.TOOGLE_SEARCHBAR, value: !isSearchBarOpen })} className="text-black md:hidden cursor-default block ml-2"><SearchIcon className="w-6 h-6" /></button>
                    <Link to='/' className="md:block hidden setCursor ml-3 text-gray-800 font-bold text-2xl">Shopee</Link>
                </div>
                <div className="md:hidden block">
                    <Link to='/' className="setCursor text-gray-800 font-bold text-2xl">Shopee</Link>
                </div>
                <div className="md:flex hidden col-span-3 w-full h-11 items-center">
                    <input type="text" placeholder="Search product here" className="w-full md:block hidden border-r-0 px-3 h-full py-2 rounded-l-md outline-none border-gray-100 border" />
                    <button className="bg-green-400 transition-all duration-200 hover:bg-gray-800 flex w-12 text-white h-full items-center justify-center rounded-r-md"><SearchIcon className="w-6 h-6" /></button>
                </div>
                <div className="flex flex-row col-span-1 items-center w-full justify-end gap-3">
                    <button className="md:flex items-center hidden">
                        <UserCircleIcon className="w-8 h-8" />
                        <span className="flex flex-col">
                            <span className="leading-3 font-medium">Register</span>
                            <span className="leading-5 font-medium">Or Login</span>
                        </span>
                    </button>
                    <NavLink to='/cart' className={(pos) => `${pos.isActive ? "navActive" : ""} flex relative setCursor items-center`}>
                        <ShoppingBagIcon className="md:w-9 md:h-9 w-7 h-7" />
                        <span className="rounded-full w-5 h-5 flex items-center justify-center bg-green-500 text-white absolute md:bottom-0 -bottom-2 md:right-0 -right-2 text-xs">5</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
