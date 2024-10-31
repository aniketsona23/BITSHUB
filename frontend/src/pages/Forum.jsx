import React from "react";
import UserNavbar from "../Components/UserNavBar";
import CoursesPane from "../Components/CoursesPane";
import MainPane from "../Components/MainPane";

function Forum() {
    return (
        <main className="flex w-full min-h-screen">
            <CoursesPane />
            <MainPane />
        </main>
    );
}

export default Forum;
