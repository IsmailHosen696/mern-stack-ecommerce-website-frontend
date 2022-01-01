import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <div className="xl:w-60 fixed flex py-2 px-3 bg-white h-full shadow">
            <div className="flex flex-col w-full">
                <NavLink to='dashboard' className={(pos) => `${pos.isActive ? "active-admin-sidebar-link" : ""} admin-sidebar-link`}>Dashboard</NavLink>
                <NavLink to='add/new/product' className={(pos) => `${pos.isActive ? "active-admin-sidebar-link" : ""} admin-sidebar-link`}>Add Product</NavLink>
                <NavLink to='all/users' className={(pos) => `${pos.isActive ? "active-admin-sidebar-link" : ""} admin-sidebar-link`}>Users</NavLink>
                <NavLink to='all/orders' className={(pos) => `${pos.isActive ? "active-admin-sidebar-link" : ""} admin-sidebar-link`}>Orders</NavLink>
            </div>
        </div>
    )
}
