import React, { useEffect, useState } from 'react'
import {
    CubeIcon,
    InboxIcon,
    LoginIcon,
    LogoutIcon,
    ShoppingCartIcon,
    UserIcon,
    ViewGridIcon,
} from "@heroicons/react/outline";

import { NavLink } from "react-router-dom";
import { useDashboard } from "../../contexts/DashboardProvider";
import { linkType } from "../../types";

export const links: linkType[] = [
    {
        name: "Dashboard",
        Icon: ViewGridIcon,
        to: "/admin/dashboard"
    },
    {
        name: "Products",
        Icon: CubeIcon,
        to: "/all/products"
    },
    {
        name: "Cart",
        Icon: ShoppingCartIcon,
        to: "/cart"
    },
    {
        name: "Orders",
        Icon: InboxIcon,
        to: "/orders"
    },
    {
        name: "Profile",
        Icon: UserIcon,
        to: "/profile"
    },
    {
        name: "Login",
        Icon: LoginIcon,
        to: "/auth/signin"
    },
]
export default function SecondNav() {
    const { state: { user } } = useDashboard();
    const [isStickyBarActive, setIsStickyBarActive] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100) {
            setIsStickyBarActive(true);
        } else {
            setIsStickyBarActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isStickyBarActive ? "sticky top-0 left-0 z-40" : "static"} py-2 w-full bg-black`}>
            <div className="w-full max-w-screen-2xl mx-auto">
                <ul className="flex w-full items-start sm:items-end justify-between py-2 gap-5 text-gray-100 px-5">
                    {
                        links.map(({ to, name, Icon }, i) =>
                            <li key={i}>
                                {name === "Login" ?
                                    user ?
                                        <button className="menuclass setCursor">
                                            {<LogoutIcon className="w-5 h-5" />}
                                            Logout
                                        </button>
                                        :
                                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} menuclass setCursor `} to={`${to}`}>
                                            {<Icon className="w-5 h-5" />}
                                            {name}
                                        </NavLink>
                                    :
                                    user ?
                                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} ${(name === "Dashboard" && user?.role === "admin") ? "block" : "hidden"}`} to={`${to}`}>
                                            {<Icon className="w-5 h-5" />}
                                            {name}
                                        </NavLink>
                                        :
                                        <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} ${name === "Dashboard" ? "block" : "hidden"} menuclass setCursor `} to={`${to}`}>
                                            {<Icon className="w-5 h-5" />}
                                            {name}
                                        </NavLink>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
