// layout.jsx
import { Outlet } from "react-router";
import { NavBar } from "../navbar/navbar";

export function Layout () {
    return (
        <div className="layout">
            <NavBar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}