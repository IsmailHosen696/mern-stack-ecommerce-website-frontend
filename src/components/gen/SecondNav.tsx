import { useEffect, useState } from 'react'
import {
    QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import { NavLink } from "react-router-dom";
import { linkType } from "../../types";
import { useAppSelector } from '../../redux/store';

export const links: linkType[] = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "Dashboard",
        to: "/admin/dashboard"
    },
    {
        name: "Products",
        to: "/all/products"
    },
    {
        name: "Cart",
        to: "/cart"
    },
    {
        name: "Orders",
        to: "/orders"
    },
    {
        name: "Profile",
        to: "/profile"
    },
]

export default function SecondNav() {
    const [isStickyBarActive, setIsStickyBarActive] = useState(false);

    const { user } = useAppSelector((state) => state.storeslice);

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
        <div className={`${isStickyBarActive ? "sticky top-0 left-0 z-40" : "static"} md:flex hidden py-2 w-full bg-black`}>
            <div className="w-full flex items-center justify-between max-w-screen-2xl mx-auto py-2 px-5">
                <ul className="flex items-start md:items-end justify-between gap-5 text-gray-200">
                    {
                        links.map(({ to, name }, i) =>
                            user ?
                                <li key={i} className={`${(name === "Dashboard" && user.role === "admin") ? "block" : "hidden"}`}>
                                    <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} `} to={`${to}`}>
                                        {name}
                                    </NavLink>
                                </li> :
                                <li key={i} className={`${name === "Dashboard" ? "hidden" : "block"} `}>
                                    <NavLink className={(pos) => `${pos.isActive ? "navActive" : ""} menuclass setCursor `} to={`${name === "Profile" && !user ? "/auth/signin" : to}`}>
                                        {name}
                                    </NavLink>
                                </li>

                        )
                    }
                </ul>
                <div className='flex items-center'>
                    <QuestionMarkCircleIcon className='text-gray-300 mr-2 w-6 h-6' />
                    <h1 className='text-gray-200'>+8801234567890</h1>
                </div>
            </div>
        </div>
    )
}
