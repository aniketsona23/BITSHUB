import React from "react";
import CourseBtn from "./CourseBtn";

function CoursesPane() {
    return (
        <div className="flex flex-col items-center gap-[2%] border-white/25 py-[2%] border-r border-solid w-[18%] h-[100%]">
            <div className="flex flex-col items-center gap-3 w-[100%]">
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[80%] font-['Poppins'] font-semibold text-lg text-white">
                    My Doubts
                </button>
              <button className="bg-orange-600 px-4 py-3 rounded-lg w-[80%] font-['Poppins'] font-semibold text-lg text-white">
                    Post Doubt
                </button>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-gray-900 px-[5%] py-[9%] rounded-xl">
                <h1 className="text-2xl text-white">Your Courses</h1>
                <div className="flex flex-col items-center gap-y-[15px] bg-gray-900">
                    <CourseBtn courseName={"Object Oriented Programming"} />
                    <CourseBtn courseName={"International Economics"} />
                    <CourseBtn courseName={"Digital Design"} />
                    <CourseBtn courseName={"Discrete Structures"} />
                    <CourseBtn courseName={"Logic in Computer Science"} />
                </div>
            </div>
        </div>
    );
}

export default CoursesPane;
