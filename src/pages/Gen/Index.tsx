import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Index() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
}
