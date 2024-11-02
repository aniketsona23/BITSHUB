import { Outlet, Link } from "react-router-dom";
import UserNavbar from "./UserNavBar";
import CoursesPane from "./CoursesPane";
import React from "react";

function Layout() {
    return (
        <div className="bg-slate-950 h-[100vh] overflow-hidden">
            <UserNavbar />
            <div className="h-[calc(100vh-7%)] overflow-hidden">
                <div className="flex h-[calc(100vh-7%)]">
                    <CoursesPane />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
