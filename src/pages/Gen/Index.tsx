import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Menubar, Navbar, SecondNav } from "../../components/gen";
import BottomBar from "../../components/gen/BottomBar";
import SearchBox from "../../components/gen/SearchBox";
import { useDashboard } from "../../contexts/DashboardProvider";
import { Actions } from "../../types";

export default function Index() {
    const { dispatch, state: { isMenubarOpen, isSearchBarOpen } } = useDashboard();

    useEffect(() => {
        window.addEventListener("resize", () => {
            dispatch({ type: Actions.TOOGLE_SEARCHBAR, value: false });
        })
    });

    return (
        <Fragment>
            {
                isMenubarOpen && <Menubar />
            }
            {
                isSearchBarOpen && <SearchBox />
            }
            <Navbar />
            <SecondNav />
            <BottomBar />
            <div className="sm:mb-0 mb-20">
                <Outlet />
            </div>
        </Fragment>
    )
}
