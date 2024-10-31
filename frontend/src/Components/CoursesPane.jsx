import React from "react";
import CourseBtn from "./CourseBtn";

function CoursesPane() {
    return (
        <div className="top-0 left-0 sticky flex flex-col flex-grow items-center gap-[2%] border-white/25 px-[1%] py-[2%] border-r border-solid w-[30%]">
            <div className="flex flex-col items-center gap-3 w-[100%]">
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins'] font-semibold text-sm text-white">
                    My Doubts
                </button>
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins'] font-semibold text-sm text-white">
                    Post Doubt
                </button>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-gray-900 px-[5%] py-[9%] rounded-xl">
                <h1 className="text-white text-xl">Your Courses</h1>
                <div className="flex flex-col items-center gap-y-[15px] bg-gray-900">
                    <CourseBtn
                        id={1}
                        courseName={"Object Oriented Programming"}
                    />
                    <CourseBtn id={2} courseName={"International Economics"} />
                    <CourseBtn id={3} courseName={"Digital Design"} />
                    <CourseBtn id={4} courseName={"Discrete Structures"} />
                    <CourseBtn
                        id={5}
                        courseName={"Logic in Computer Science"}
                    />
                </div>
            </div>
        </div>
    );
}

export default CoursesPane;
