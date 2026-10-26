import { Outlet } from "react-router-dom";
import "./DetailLayout.css";

const DetailLayout = () => {
    return (
        <main className="detail-page">
            <Outlet />
        </main>
    );
};

export default DetailLayout;