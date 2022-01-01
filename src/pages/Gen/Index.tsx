import { onAuthStateChanged } from "firebase/auth";
import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { findUserFromFirebase } from "../../api";
import { Menubar, Navbar } from "../../components/gen";
import { useDashboard } from "../../contexts/DashboardProvider";
import { auth } from "../../db/firebase";
import { Actions, usertype } from "../../types";

export default function Index() {
    const { state: { isMenubarOpen }, dispatch } = useDashboard();
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                findUserFromFirebase(data.uid).then(rData => {
                    let guser = rData[0] as usertype;
                    let payload: usertype = {
                        uid: guser.uid,
                        displayName: guser.displayName,
                        email: guser.email,
                        photoURL: guser.photoURL,
                        role: guser.role
                    }
                    dispatch({ type: Actions.SET_USER, user: payload })
                })
            }
            return
        })
    }, [dispatch])

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
