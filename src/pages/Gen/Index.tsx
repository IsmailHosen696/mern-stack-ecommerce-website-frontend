import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Menubar, Navbar, SecondNav } from "../../components/gen";
import { useDashboard } from "../../contexts/DashboardProvider";

export default function Index() {
    const { state: { isMenubarOpen }, dispatch } = useDashboard();


    return (
        <Fragment>
            {
                isMenubarOpen && <Menubar />
            }
            <Navbar />
            <SecondNav />
            <Outlet />
        </Fragment>
    )
}
