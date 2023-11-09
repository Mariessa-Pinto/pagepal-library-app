import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div style={{backgroundColor: '#EBEBEB', height: '100vh'}}>
            <Outlet />
        </div>
    );
}
