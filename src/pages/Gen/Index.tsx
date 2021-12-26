import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Menubar, Navbar } from "../../components";
import { useDashboard } from "../../contexts/DashboardProvider";

export default function Index() {
    const { state: { isMenubarOpen } } = useDashboard();
    return (
        <Fragment>
            {
                isMenubarOpen && <Menubar />
            }
            <Navbar />
            <Outlet />
        </Fragment>
    )
}
