import { CubeIcon, InboxIcon, LoginIcon, LogoutIcon, ShoppingCartIcon, UserIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { useDashboard } from "../contexts/DashboardProvider";
import { auth } from "../db/firebase";
import { Actions } from "../types";

export default function Menubar() {
    const { dispatch, state: { user } } = useDashboard();
    const handleLogout = async () => {
        signOut(auth);
        dispatch({ type: Actions.LOGOUT_USER, user: null });
    }
    return (
        <div className="w-full flex items-center justify-center h-full overflow-hidden bg-gray-50 transition-all duration-150 z-50 fixed top-0">
            <div className="w-full h-full relative flex items-center justify-center">
                <button onClick={() => dispatch({ type: Actions.TOOGLE_MENUBAR })} className="w-8 h-8 setCursor rounded-full hover:bg-gray-100 flex justify-center items-center absolute top-5 right-5 sm:right-10"><XIcon className="w-6 h-6" /></button>
                <ul className="flex gap-5 flex-col px-5">
                    {
                        user?.role === 'admin' &&
                        <li>
                            <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/admin/dashboard'><ViewGridIcon className="w-5 h-5" /> Dashboard</NavLink>
                        </li>
                    }
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/all/products'><CubeIcon className="w-5 h-5" /> Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/cart'><ShoppingCartIcon className="w-5 h-5" />Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/orders'><InboxIcon className="w-5 h-5" />Orders</NavLink>
                    </li>
                    {user &&
                        <li>
                            <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/profile'><UserIcon className="w-5 h-5" />Profile</NavLink>
                        </li>
                    }

                    {
                        !user ?
                            <li>
                                <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} flex items-center gap-1 setCursor `} to='/auth/signin'><LoginIcon className="w-5 h-5" />Signin</NavLink>
                            </li>
                            :
                            <li onClick={handleLogout}>
                                <button className={`flex items-center gap-1 setCursor`}><LogoutIcon className="w-5 h-5" />Logout</button>
                            </li>
                    }
                </ul>
            </div>
        </div>
    )
}
