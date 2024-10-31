import React from "react";
import { Link } from "react-router-dom";
function UserNavbar() {
    return (
        <nav className="top-0 z-10 sticky flex justify-between border-white/25 bg-slate-950 px-[80px] py-[20px] border-b border-solid h-[7%] font-['Inter'] font-semibold text-xl">
            <div className="flex justify-center items-center space-x-7 text-white">
                <h1 className="text-3xl">BitsHub</h1>
                <h2 className="text-lg">BITS Pilani, K.K. Birla Goa Campus</h2>
            </div>
            <ul className="flex items-center space-x-[55px] text-white">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Courses</Link>
                </li>
                <li>
                    <Link to="/">Profile</Link>
                </li>
                <li>
                    <Link to="/forum">Forum</Link>
                </li>
                <li>
                    <Link to="/">Sign</Link> Out
                </li>
            </ul>
        </nav>
    );
}

export default UserNavbar;
