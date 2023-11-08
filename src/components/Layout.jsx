import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Outlet />
        </div>
    );
}
