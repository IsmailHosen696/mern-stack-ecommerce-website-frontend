import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminSidebar } from '../../components/admin';
import { Menubar, Navbar } from "../../components/gen";
import { useDashboard } from "../../contexts/DashboardProvider";
export default function AdminIndex() {
    const { state: { isMenubarOpen, user } } = useDashboard();
    const navigate = useNavigate();
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
            <AdminSidebar />
            <Outlet />
        </div>
    )
}
