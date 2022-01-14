import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminSidebar } from '../../components/admin';
import { Menubar, Navbar, SecondNav } from "../../components/gen";
import BottomBar from "../../components/gen/BottomBar";
import { useDashboard } from "../../contexts/DashboardProvider";
import { useAppSelector } from "../../redux/store";

export default function AdminIndex() {
    const { state: { isMenubarOpen } } = useDashboard();
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.storeslice);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
        return
    })
    return (
        <div>
            {
                isMenubarOpen && <Menubar />
            }
            <Navbar />
            <BottomBar />
            <SecondNav />
            <AdminSidebar />
            <Outlet />
        </div>
    )
}
