import { linkType } from "../../types"
import { HomeIcon, DocumentIcon, CubeTransparentIcon, ViewGridIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/solid';
import { NavLink } from "react-router-dom";
import { useDashboard } from "../../contexts/DashboardProvider";

export const bottombarlinks: linkType[] = [
    {
        Icon: HomeIcon,
        name: "Home",
        to: "/"
    },
    {
        Icon: DocumentIcon,
        name: "Products",
        to: "/all/products"
    },
    {
        Icon: ViewGridIcon,
        name: "Dashboard",
        to: "/admin/dashboard"
    },
    {
        Icon: CubeTransparentIcon,
        name: "Orders",
        to: "/orders"
    },
    {
        Icon: UserIcon,
        name: "Profile",
        to: "/profile"
    },
]
export default function BottomBar() {
    const { state: { user } } = useDashboard();
    return (
        <div className="w-full items-center justify-center md:hidden flex px-5 h-16 border-t py-2 bg-white fixed bottom-0">
            <div className="flex items-center justify-between w-full">
                {
                    bottombarlinks.map(({ to, name, Icon }, i) => {
                        return <NavLink key={i} to={`${name === 'Profile' ? user ? to : '/auth/signin' : to}`}
                            className={(pos) => `${pos.isActive ? "navActive" : ""} cursor-default ${!user && name === 'Dashboard' && "hidden"} ${user && user.role !== "admin" && "hidden"} flex flex-col items-center`}>
                            {Icon && <span><Icon className="w-5 h-5" /></span>}
                            <span>{name}</span>
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}
