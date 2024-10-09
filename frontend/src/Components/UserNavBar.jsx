import React from "react";

function UserNavbar() {
  return (
    <nav className="flex justify-between border-white/25 bg-slate-950 px-[80px] py-[20px] border-b border-solid h-[7%] font-['Inter'] font-semibold text-xl">
      <div className="flex justify-center items-center space-x-7 text-white">
        <h1 className="text-3xl">BitsHub</h1>
        <h2 className="text-lg">BITS Pilani, K.K. Birla Goa Campus</h2>
      </div>
      <ul className="flex items-center space-x-[55px] text-white">
        <li><a href="">Home</a></li>
        <li><a href="">Courses</a></li>
        <li><a href="">Profile</a></li>
        <li><a href="">Help</a></li>
        <li><a href="">Sign</a> Out</li>
      </ul>
    </nav>
  );
}

export default UserNavbar;
