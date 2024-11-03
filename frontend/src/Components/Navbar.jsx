import React from "react";

function Navbar() {
    return (
        <nav className="bg-zinc-950 px-[20px] py-[15px] font-['Inter'] font-semibold text-2xl">
            <ul className="flex justify-center space-x-[55px] text-white">
                <li>Home</li>
                <li>About</li>
                <li>BITS Pilani, K.K. Birla Goa Campus</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
