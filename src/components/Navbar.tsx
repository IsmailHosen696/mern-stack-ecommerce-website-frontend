import { Link, NavLink } from "react-router-dom";
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useDashboard } from "../contexts/DashboardProvider";
import { Actions } from "../types";

export default function Navbar() {
    const { dispatch } = useDashboard();
    return (
        <div className="w-full sticky top-0 z-40 bg-white h-14 flex border-b">
            <div className="m-auto w-full flex px-5 justify-between items-center h-full max-w-screen-2xl">
                <div className="flex">
                    <Link to='/' className="font-semibold setCursor text-gray-800 text-lg">E-Shop</Link>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <NavLink to='/cart' className={(pos) => `${pos.isActive ? "navActive" : ""} flex setCursor items-center`}><ShoppingCartIcon className="w-5 h-5" /></NavLink>
                    <button className="setCursor" onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} ><MenuIcon className="w-5 h-5" /></button>
                </div>
            </div>
        </div>
    )
}
